
const {CreateCategory, getCategoryById} = require('../controller/categoryController')

const express = require('express');
const Router = express.Router();

Router.post('/register', CreateCategory)
Router.get('/getcategory/:id', getCategoryById)

module.exports = Router