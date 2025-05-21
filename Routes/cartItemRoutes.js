
const{CreateCartItem} = require('../controller/cartItemcontroller');

const express = require('express');
const Router = express.Router();

Router.post('/register', CreateCartItem)

module.exports = Router