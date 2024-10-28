const express = require('express');
const router = express.Router();
const authController = require('../controller/authController'); // Change here to import the whole controller

const adminController = require('../controller/adminController');

router.get('/stocks', authController.isAuthenticated,adminController.displayStocks);

router.get('/users', authController.isAuthenticated, adminController.users);

router.get('/orders', authController.isAuthenticated, adminController.displayOrders);

router.post('/add-customer', authController.isAuthenticated, adminController.addCustomer);

router.get('/dashboard', authController.isAuthenticated, adminController.displayDashBoard);

router.get('filter-dashbaord', authController.isAuthenticated, adminController.getDashboardData)

router.get('/accounts', authController.isAuthenticated, adminController.displayUsers);

router.post('/create-user', authController.isAuthenticated, adminController.createUser);

router.post('/update/:id', authController.isAuthenticated, adminController.editUser);

router.delete('/delete/:id', authController.isAuthenticated, adminController.deleteUser);

router.get('/transactions', authController.isAuthenticated, adminController.displayTransactions);

router.post('/editOrder/:id', authController.isAuthenticated, adminController.updateOrderDetails);

router.post('/add-new-item', authController.isAuthenticated, adminController.addNewItem);

router.post('/edit-product/:id', authController.isAuthenticated, adminController.editProduct);

router.post('/delete-product/:id', authController.isAuthenticated, adminController.deleteProduct);

router.post('/add-order', authController.isAuthenticated, adminController.addNewOrder);

router.post('/edit-order/:id', authController.isAuthenticated, adminController.editOrder);

router.post('/delete-order/:id', authController.isAuthenticated, adminController.deleteOrder);

module.exports = router;
