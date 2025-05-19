
const express = require('express');

const {CreateUser , VerifyEmail , Login} = require('../controller/userController')

const Router = express.Router()

Router.post('/registration', CreateUser)

Router.post('/login', Login)

Router.get('/verify/:id/:token', VerifyEmail)


module.exports = Router