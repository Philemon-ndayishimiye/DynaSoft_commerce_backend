
const {createWhishList} = require('../controller/whishListcontroller') ;

const express = require('express');
const Router = express.Router();

Router.post('/register', createWhishList)

module.exports = Router