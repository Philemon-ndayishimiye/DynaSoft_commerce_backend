
const {createOrder}= require('../controller/orderController')

const express = require('express');

const Router = express.Router();

Router.post('/register', createOrder)

module.exports = Router