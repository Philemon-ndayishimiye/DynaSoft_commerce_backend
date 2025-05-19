

const express = require('express');

const app = express()
const dotenv = require('dotenv');
dotenv.config()

const sequelize = require('./config/db')

const port = process.env.PORT;

const userRoutes = require('./Routes/userRoutes')


app.use(express.json())
app.use('/users' , userRoutes)
 

sequelize.sync().then(
    ()=>{
        app.listen(port , ()=>{

        console.log(`server is running on port ${port}`)
})
    }
)

