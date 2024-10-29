const mongoose = require('mongoose');
const Order = require('./models/orderModel'); // Adjust path as necessary
const Customer = require('./models/customerModel'); // Adjust path as necessary
const Product = require('./models/productModel'); // Adjust path as necessary
const dotenv = require('dotenv');

dotenv.config();

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

// Helper function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Seed function
async function seedOrders() {
  try {
    // Clear existing orders
    await Order.deleteMany({});

    // Fetch customers and products
    const customers = await Customer.find().limit(100); // Adjust limit as necessary
    const products = await Product.find().limit(4);    // We have only 4 products

    if (customers.length === 0 || products.length === 0) {
      console.log('Please ensure there are customers and products in the database.');
      return;
    }

    // Array to hold the new orders
    const orders = [];

    // Generate 1500 orders
    for (let i = 0; i < 1500; i++) {
      // Random customer
      const customer = getRandomElement(customers);
      
      // Random number of products for the order (between 1 and 3)
      const numberOfProducts = Math.floor(Math.random() * 3) + 1; 
      const orderedProducts = [];

      for (let j = 0; j < numberOfProducts; j++) {
        // Random product
        const product = getRandomElement(products);
        const quantity = Math.floor(Math.random() * 5) + 1;  // Random quantity between 1 and 5

        // Add product details to ordered products
        orderedProducts.push({
          product: product._id,
          name: product.name,
          quantity: quantity,
          size: product.size
        });
      }

      // Calculate total based on ordered products
      const total = orderedProducts.reduce((sum, item) => {
        return sum + (item.quantity * (products.find(p => p._id.toString() === item.product.toString()).price));
      }, 0);

      // Create the order object
      const order = new Order({
        customer: customer._id,
        products: orderedProducts,
        total: total,
        status: getRandomElement(['pending', 'processing', 'cancelled', 'delivered']), // Random status
        placed: getRandomDate(new Date(2023, 0, 1), new Date()), // Random date between Jan 1, 2023, and now
        courier: getRandomElement(['In-House', 'Third-Party']) // Random courier
      });

      // Push the order to the array
      orders.push(order);
    }

    // Insert all orders at once
    await Order.insertMany(orders);
    console.log('Seeded 1500 orders successfully');
  } catch (err) {
    console.error('Error seeding orders:', err);
  } finally {
    mongoose.connection.close(); // Close the connection when done
  }
}

// Run the seed function
seedOrders();
