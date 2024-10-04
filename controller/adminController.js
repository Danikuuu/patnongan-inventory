const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Customer = require('../models/customerModel');
const bcrypt = require('bcryptjs');

exports.users = async (req, res) => {
    try {
        const users = await User.find();
        res.render('directory', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.displayOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate({
                path: 'customer',
                select: 'first_name last_name phone email street_address city province postal_code'
            })
            .populate({
                path: 'products.product',
                select: 'name price size'
            });

        const totalRecords = orders.length;
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
                    totalSpent: 0
                };
            }
            customerOrderSummary[customerId].totalOrders += 1;
            customerOrderSummary[customerId].totalSpent += order.total;
        });

        const customerSummaryArray = Object.values(customerOrderSummary);

        res.render('directory', { 
            orders, 
            totalRecords, 
            averageSales, 
            totalCities, 
            marketPenetration,
            customerSummaryArray,
            totalCustomersWhoOrdered 
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
         res.status(200).json({message: 'Customer added successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.displayDashBoard = async(req, res) => {
    res.render('dashboard');
}

// Example of how you might render the view
exports.displayUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('accounts', { users });
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
        res.status(200).json({message: 'User added successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.editUser = async (req, res) => {
    console.log('Edit user route hit');
    const { first_name, last_name, role, username, password } = req.body;
    try {
        let user = await User.findById(req.params.id); // Make sure req.params.id is coming from the URL
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
        res.status(200).json({ success: "User updated successfully" });
    } catch (error) {
        console.error(error); // Log the error for your records
        res.status(500).json({ error: "An unexpected error occurred. Please try again later." }); // Send a generic message
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        await User.deleteOne({ _id: user._id });
        res.status(200).json({ success: "User deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.displayTransactions = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate({
                path: 'customer',
                select: 'first_name last_name phone email street_address city province postal_code'
            })
            .populate({
                path: 'products.product',
                select: 'name price size'
            });

        const totalRecords = orders.length;
        const totalPending = orders.filter(order => order.status === 'pending').length;
        const totalDelivered = orders.filter(order => order.status === 'delivered').length;
        const totalCancelled = orders.filter(order => order.status === 'cancelled').length;

        const customers = await Customer.find(); 
        const totalCustomers = customers.length; 

        res.render('inventory', {
            orders,
            totalRecords,
            totalPending,
            totalDelivered,
            totalCancelled,
            totalCustomers,
        });
        
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).send('Server Error');
    }
};

