
const {createWarehouse} = require('../controller/warehouseController');

const express = require('express');

const Router = express.Router();

Router.post('/register', createWarehouse)

module.exports = Router