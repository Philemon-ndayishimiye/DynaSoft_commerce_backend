
const {createCart} = require('../controller/Cartcontroller')

const express = require('express');
const Router = express.Router();

Router.post('/register', createCart)

module.exports = Router