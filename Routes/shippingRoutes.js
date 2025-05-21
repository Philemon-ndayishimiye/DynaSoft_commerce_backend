
const {createShippingAddress} = require('../controller/shippingController');

const express = require('express');

const Router = express.Router();

Router.post('/register', createShippingAddress)

module.exports = Router