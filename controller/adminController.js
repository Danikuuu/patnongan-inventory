const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Customer = require('../models/customerModel');
const bcrypt = require('bcryptjs');

exports.users = async (req, res) => {
    try {
        const users = await User.find();
        const success = req.session.success;
        req.session.success = null; 
        res.render('directory', { users, success });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.displayOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = 8; 
        const skip = (page - 1) * limit; 
        const success = req.session.success;
        req.session.success = null; 

        const orders = await Order.find()
            .skip(skip) 
            .limit(limit) 
            .populate({
                path: 'customer',
                select: 'first_name last_name phone email street_address city province postal_code'
            })
            .populate({
                path: 'products.product',
                select: 'name price size'
            });

        const totalRecords = await Order.countDocuments(); 
        const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
        const averageSales = totalRecords > 0 ? (totalSales / totalRecords).toFixed(2) : 0;

        const uniqueCities = new Set(orders.map(order => order.customer.city));
        const totalCities = uniqueCities.size;

        const customers = await Customer.find(); 
        const totalCustomers = customers.length; 
        const marketPenetration = totalCustomers > 0 ? ((totalRecords / totalCustomers) * 100).toFixed(2) : 0;

        const uniqueCustomerIds = new Set(orders.map(order => order.customer._id.toString()));
        const totalCustomersWhoOrdered = uniqueCustomerIds.size; 

        const customerOrderSummary = {};
        orders.forEach(order => {
            const customerId = order.customer._id.toString();
            if (!customerOrderSummary[customerId]) {
                customerOrderSummary[customerId] = {
                    customer: order.customer,
                    totalOrders: 0,
                    totalSpent: 0,
                    lastOrderId: order._id
                };
            }
            customerOrderSummary[customerId].totalOrders += 1;
            customerOrderSummary[customerId].totalSpent += order.total;
        });

        const customerSummaryArray = Object.values(customerOrderSummary);
        
        const totalPages = Math.ceil(totalRecords / limit);

        res.render('directory', { 
            orders, 
            totalRecords, 
            averageSales, 
            totalCities, 
            marketPenetration,
            customerSummaryArray,
            totalCustomersWhoOrdered,
            currentPage: page, 
            totalPages, 
            limit,
            success
        });
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).send('Server Error');
    }
};


exports.addCustomer = async(req, res) => {
    try{
        const { first_name, last_name, phone, email, street_address, city, province, postal_code } = req.body;

        const newCustomer = new Customer({
            first_name,
            last_name,
            phone,
            email,
            street_address,
            city,
            province,
            postal_code
        });
         await newCustomer.save();
         req.session.success = 'New customer Added!';
         res.redirect('/admin/orders');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.displayDashBoard = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate({
                path: 'customer',
                select: 'first_name last_name city'
            });

        const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
        const totalOrders = orders.length; // Count of orders
        const totalCustomers = await Customer.countDocuments(); 
        const averageOrderValue = totalOrders > 0 ? (totalSales / totalOrders).toFixed(2) : 0;
        const marketPenetration = totalCustomers > 0 ? ((totalOrders / totalCustomers) * 100).toFixed(2) : 0;

        const customerOrderSummary = {};
        orders.forEach(order => {
            const customerId = order.customer._id.toString();
            if (!customerOrderSummary[customerId]) {
                customerOrderSummary[customerId] = {
                    customer: order.customer,
                    totalOrders: 0,
                    totalSpent: 0
                };
            }
            customerOrderSummary[customerId].totalOrders += 1;
            customerOrderSummary[customerId].totalSpent += order.total;
        });

        const customerSummaryArray = Object.values(customerOrderSummary);
        const topCustomers = customerSummaryArray
            .sort((a, b) => b.totalOrders - a.totalOrders)
            .slice(0, 3)
            .map(customer => ({
                name: `${customer.customer.first_name} ${customer.customer.last_name}`,
                totalOrders: customer.totalOrders,
                totalSpent: customer.totalSpent.toFixed(2)
            }));

        const areaSummary = {};
        orders.forEach(order => {
            const city = order.customer.city;
            if (!areaSummary[city]) {
                areaSummary[city] = {
                    city,
                    totalOrders: 0,
                    totalSales: 0 
                };
            }
            areaSummary[city].totalOrders += 1;
            areaSummary[city].totalSales += order.total; 
        });

        const topAreas = Object.values(areaSummary)
            .sort((a, b) => b.totalOrders - a.totalOrders)
            .slice(0, 3);

        const topAreasWithSales = topAreas.map(area => ({
            city: area.city,
            totalOrders: area.totalOrders,
            totalSales: area.totalSales.toFixed(2) 
        }));

        const uniqueCities = new Set(orders.map(order => order.customer.city));
        const areaCovered = uniqueCities.size;

        const salesByDay = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    totalSales: { $sum: "$total" }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        const trackLabels = salesByDay.map(sale => sale._id);
        const trackData = salesByDay.map(sale => sale.totalSales);

        const deliveryBreakdown = await Order.aggregate([
            {
                $group: {
                    _id: "$deliveryType",
                    totalOrders: { $sum: 1 }
                }
            }
        ]);

        const salesByMonth = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$placed" } },
                    totalSales: { $sum: "$total" }
                }
            },
            { $sort: { "_id": 1 } }
        ]);

        const months = salesByMonth.map(sale => sale._id);
        const totalRevenue = salesByMonth.map(sale => sale.totalSales);     

        const orderByMonth = await Order.aggregate([
            { $unwind: "$products" }, // Unwind the products array to process each product separately
            {
                $group: {
                    _id: { 
                        month: { $dateToString: { format: "%Y-%m", date: "$placed" } }, // Group by year-month
                        size: "$products.size" // Group by product size
                    },
                    totalOrders: { $sum: 1 } // Count the number of orders
                }
            },
            { $sort: { "_id.month": 1 } }
        ]);

        res.render('dashboardtest', {
            totalSales,
            totalOrders,
            areaCovered,
            totalCustomers,
            averageOrderValue,
            marketPenetration,
            topCustomers,
            topAreas: topAreasWithSales,
            trackLabels,
            trackData,
            deliveryBreakdown,
            orderByMonth,
            salesByMonth,
            months, 
            totalRevenue 
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error.message);
        res.status(500).send('Server Error');
    }
};

exports.displayUsers = async (req, res) => {
    try {
        const users = await User.find();
        const success = req.session.success;
        const error = req.session.error;
        req.session.error = null;
        req.session.success = null; 
        res.render('accounts', { users, success, error });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


exports.createUser = async(req, res) => {
    try{
        const { first_name, last_name, role, username, password } = req.body;
        const newUser = new User({ first_name, last_name, role, username, password });

        await newUser.save();
        req.session.success = 'New user Added!'; 
        res.redirect('/admin/accounts');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.editUser = async (req, res) => {
    const { first_name, last_name, role, username, password } = req.body;
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.first_name = first_name;
        user.last_name = last_name;
        user.role = role;
        user.username = username;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        req.session.success = 'User updated successfully';
        res.redirect('/admin/accounts');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        await User.deleteOne({ _id: user._id });
        req.session.success = 'User deleted successfully';
        res.redirect('/admin/accounts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.displayTransactions = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit; 
        const success = req.session.success;
        req.session.success = null; 

        const products = await Product.find();
        const orders = await Order.find()
            .populate({
                path: 'customer',
                select: 'first_name last_name phone email street_address city province postal_code'
            })
            .populate({
                path: 'products.product',
                select: 'name price size'
            })
            .skip(skip) 
            .limit(limit); 

        const totalRecords = await Order.countDocuments(); 
        const totalPending = await Order.countDocuments({ status: 'pending' });
        const totalDelivered = await Order.countDocuments({ status: 'delivered' });
        const totalCancelled = await Order.countDocuments({ status: 'cancelled' });

        const customers = await Customer.find(); 
        const totalCustomers = customers.length; 

        const totalPages = Math.ceil(totalRecords / limit);

        res.render('inventory', {
            orders,
            totalRecords,
            totalPending,
            totalDelivered,
            totalCancelled,
            totalCustomers,
            customers,
            currentPage: page,
            totalPages, 
            limit ,
            success,
            products
        });
        
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).send('Server Error');
    }
};


exports.updateOrderDetails = async (req, res) => {

    try {
        const { first_name, last_name, phone, email, street_address, city, province, postal_code } = req.body;

        let order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Updating order fields
        order.first_name = first_name;
        order.last_name = last_name;
        order.phone = phone;
        order.email = email;
        order.street_address = street_address;
        order.city = city;
        order.province = province;
        order.postal_code = postal_code;

        await order.save();
        console.log("Order updated successfully");
        res.status(200).json({ success: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
};

exports.displayStocks = async(req, res) => {
    try {
        const products = await Product.find();
        console.log(products);
        const success = req.session.success;
        req.session.success = null; 
        return res.render('stocks', { products, success });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.addNewItem = async (req, res) => {
    try {
        const { name, price, size , stock} = req.body;
        const newProduct = new Product({ name, price, size, stock });
        await newProduct.save();
        req.session.success = 'New item added successfully';
        res.redirect('/admin/stocks');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.editProduct = async (req, res) => {
    try {
        const { name, price, size, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        product.name = name;
        product.price = price;
        product.size = size;
        product.stock = stock;
        await product.save();
        req.session.success = 'Product updated successfully';
        res.redirect('/admin/stocks');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        await Product.deleteOne({ _id: product._id });
        req.session.success = 'Product deleted successfully';
        res.redirect('/admin/stocks');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.addNewOrder = async (req, res) => {
    try {
        const { customer, product, quantity, courier } = req.body;

        if (!customer || !product || !quantity || !courier) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const productData = await Product.findById(product);
        if (!productData) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        const totalAmount = productData.price * quantity;

        const newOrder = new Order({
            customer,
            products: [{
                product,
                quantity,
                size: productData.size
            }],
            total: totalAmount,
            courier,
            status: 'pending'
        });

        await newOrder.save();
        req.session.success = 'Order placed successfully';
        res.redirect('/admin/transactions');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.editOrder = async (req, res) => {
    const { transactionId } = req.params._id;
    const {
        customer_name,
        address,
        qty,
        amount,
        dispatch,
        status,
        delivered
    } = req.body;

    try {
        // Find the order by transaction ID
        const order = await Order.findById(transactionId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Update order fields
        order.customer_name = customer_name; // Assuming you're storing customer names in the order, if not adjust this
        order.address = address; // Update address
        order.qty = qty; // Update quantity
        order.total = amount; // Update total amount
        order.dispatch = dispatch ? new Date(dispatch) : null; // Update dispatch date
        order.status = status; // Update status
        order.delivered = delivered ? new Date(delivered) : null; // Update delivered date

        // Save the updated order
        await order.save();
        req.session.success = 'Order updated successfully';
        // Redirect or respond with success
        res.redirect('/admin/transactions');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id; 
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        await Order.deleteOne({ _id: orderId }); // Directly use orderId here
        req.session.success = 'Order deleted successfully';
        res.redirect('/admin/transactions');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};