const express = require('express');
const router = express.Router();

const adminController = require('../controller/adminController');

router.get('/users', adminController.users);

router.get('/orders', adminController.displayOrders);

router.post('/add-customer', adminController.addCustomer);

router.get('/dashboard', adminController.displayDashBoard);

router.get('/accounts', adminController.displayUsers);

router.post('/create-user', adminController.createUser);

router.put('/update-user/:id', adminController.editUser);

module.exports = router;