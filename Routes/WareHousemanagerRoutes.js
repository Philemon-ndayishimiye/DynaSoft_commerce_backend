
const{createWareHouseManager} = require('../controller/WarehouseManagerController')

const express = require('express');
const Router = express.Router();

Router.post('/register', createWareHouseManager)

module.exports = Router