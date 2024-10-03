const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Customer = require('../models/customerModel');

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

exports.editUser = async(req, res) => {
    try {

        console.log('Request Body:', req.body); // Log the body
        console.log('User ID:', req.params.id); // Log the ID

        const { id } = req.params;
        const { first_name, last_name, role, username, password } = req.body;

        let inputFields = { first_name, last_name, role, username, password };

        const updateUser = await User.findByIdAndUpdate(id, inputFields, { new: true });

        if(!updateUser) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User updated successfully'});
    } catch {
        res.status(400).json({message: error.message});
    }
}

// exports.deleteUser = async(req, res) => {
//     try {

//     }
// }
