
const {CreatePayment} = require('../controller/paymentController') ;

const express = require('express');
const Router = express.Router();

Router.post('/register', CreatePayment)

module.exports = Router