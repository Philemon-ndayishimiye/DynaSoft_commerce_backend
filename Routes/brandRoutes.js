
const {createBrand} = require('../controller/brandController')
const express = require('express');
const Router = express.Router();

Router.post('/register', createBrand)

module.exports = Router