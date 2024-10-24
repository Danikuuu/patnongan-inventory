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

async function updateProductSize() {
    try {
        const result = await Order.updateMany(
            { 'products.size': 'meduim' }, // Condition: Find products with size 'meduim'
            { $set: { 'products.$[elem].size': 'Meduim' } }, // Update the size to 'Meduim'
            {
                arrayFilters: [{ 'elem.size': 'meduim' }], // Filter to ensure only matching products are updated
                multi: true // Apply to all matching documents
            }
        );
        console.log(`${result.modifiedCount} documents were updated.`);
    } catch (error) {
        console.error('Error updating product sizes:', error.message);
    }
}

updateProductSize();