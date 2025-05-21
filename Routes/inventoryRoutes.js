
const {createInventory} = require('../controller/inventorycontroller')

const express = require('express');
const Router = express.Router();

Router.post('/register', createInventory)

module.exports = Router