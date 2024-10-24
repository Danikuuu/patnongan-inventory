const mongoose = require('mongoose');
const Order = require('./models/orderModel');  // Adjust path as necessary
const Customer = require('./models/customerModel');  // Adjust path for customer model
const Product = require('./models/productModel');  // Adjust path for product model

const dotenv = require('dotenv');
dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Helper function to generate random dates within a range
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Helper function to generate random data
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Status, couriers, and sizes for randomization
const statuses = ['pending', 'processing', 'shipped', 'delivered'];
const couriers = ['DHL', 'FedEx', 'UPS', 'USPS'];
const sizes = ['small', 'medium', 'large', 'extra-large'];

// Seed function
async function seedOrders() {
  try {
    // Fetch some customers and products
    const customers = await Customer.find().limit(10); // Get 10 random customers
    const products = await Product.find().limit(5);    // Get 5 random products

    if (customers.length === 0 || products.length === 0) {
      console.log('Please make sure there are customers and products in the database.');
      return;
    }

    // Array to hold the new orders
    const orders = [];

    // Generate 100 orders
    for (let i = 0; i < 100; i++) {
      // Random customer and product
      const customer = getRandomElement(customers);
      const product = getRandomElement(products);

      // Create the order object
      const order = new Order({
        customer: customer._id,
        products: [{
          product: product._id,
          quantity: Math.floor(Math.random() * 5) + 1,  // Random quantity between 1 and 5
          size: getRandomElement(sizes)                // Random size
        }],
        total: Math.floor(Math.random() * 500) + 50,    // Random total between $50 and $500
        status: getRandomElement(statuses),             // Random status
        courier: getRandomElement(couriers),            // Random courier
        placed: getRandomDate(new Date(2023, 0, 1), new Date()) // Random date between Jan 1, 2023, and now
      });

      // Push the order to the array
      orders.push(order);
    }

    // Insert all orders at once
    await Order.insertMany(orders);
    console.log('Seeded 100 orders successfully');
  } catch (err) {
    console.error('Error seeding orders:', err);
  } finally {
    mongoose.connection.close(); // Close the connection when done
  }
}

// Run the seed function
seedOrders();
