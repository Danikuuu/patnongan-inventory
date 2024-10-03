const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    street_address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    order_count: {
        type: Number,
        required: true,
        default: 0
    },
    total_sales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    }]
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;