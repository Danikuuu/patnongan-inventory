const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['cashier', 'courier', 'admin'],
        default: 'user'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
}); 

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;