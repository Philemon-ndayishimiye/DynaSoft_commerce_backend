
const {createrOrderItem} = require('../controller/OrderItemcontroller')

const express = require('express');

const Router = express.Router();

Router.post('/register', createrOrderItem)

module.exports = Router