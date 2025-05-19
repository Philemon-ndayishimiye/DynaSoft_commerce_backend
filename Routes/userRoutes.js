
const express = require('express');

const {CreateUser , VerifyEmail , Login , ResetPassword , forgotPassword} = require('../controller/userController')

const Router = express.Router()

Router.post('/registration', CreateUser)

Router.post('/forgotpassword' , forgotPassword)

Router.post('/resetpassword/:id/:token' , ResetPassword)

Router.post('/login', Login)


Router.get('/verify/:id/:token', VerifyEmail)


module.exports = Router