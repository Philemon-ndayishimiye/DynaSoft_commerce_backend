
const express = require('express');

const {CreateUser} = require('../controller/userController')

const Router = express.Router()

Router.post('/registration', CreateUser)


module.exports = Router