const { check } = require('express-validator');
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const welcomeController = require('../controller/welcomeController');

router.get('/', welcomeController.welcome);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

module.exports = router;
