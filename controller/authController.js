const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');


exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.render('welcome', { error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('welcome', { error: 'Incorrect password' });
        }
        
        if(user.role == 'admin') {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
            res.status(200).redirect('/admin/dashboard');
        }

        // if(user.role == 'user') {
        //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        //     res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
        //     res.status(200).json('user');
        // }

    } catch (error) {
        res.redirect('/', { error : 'Wrong credentials'} );
    }
};

exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            res.render('welcome', { error: 'Unauthorized Action' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            res.status(404).render('welcome', { error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
