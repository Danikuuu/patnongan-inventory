const mongoose = require('mongoose');
const Order = require('./models/orderModel'); // Adjust the path as necessary
const Customer = require('./models/customerModel');
const Product = require('./models/productModel');

const dotenv = require('dotenv');
dotenv.config()

async function seedOrders() {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Clear existing orders
        await Order.deleteMany({});

        const customers = await Customer.find(); // Get all customers
        const products = await Product.find(); // Get all products

        const orders = [];

        // Generate orders for each customer
        for (const customer of customers) {
            const numOrders = Math.floor(Math.random() * 5) + 1; // Random number of orders (1-5) for each customer
            
            for (let i = 0; i < numOrders; i++) {
                // Randomly select products for the order
                const selectedProducts = [];
                const productCount = Math.floor(Math.random() * 3) + 1; // Random number of products (1-3)

                for (let j = 0; j < productCount; j++) {
                    const randomProduct = products[Math.floor(Math.random() * products.length)];
                    const quantity = Math.floor(Math.random() * 5) + 1; // Random quantity (1-5)
                    
                    selectedProducts.push({
                        product: randomProduct._id,
                        quantity,
                        size: randomProduct.size
                    });
                }

                // Calculate total price for the order
                const total = selectedProducts.reduce((acc, item) => {
                    const product = products.find(p => p._id.toString() === item.product.toString());
                    return acc + (product.price * item.quantity);
                }, 0);

                // Create an order
                orders.push({
                    customer: customer._id,
                    products: selectedProducts,
                    total: total.toFixed(2), // Format to two decimal places
                    courier: 'LBC',
                    placed: new Date(),
                });
            }
        }

        // Insert all generated orders
        await Order.insertMany(orders);
        console.log('Orders seeded successfully:', orders.length);
    } catch (error) {
        console.error('Error seeding orders:', error.message);
    } finally {
        mongoose.connection.close();
    }
}

seedOrders();
