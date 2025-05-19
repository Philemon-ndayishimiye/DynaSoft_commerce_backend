
const {Sequelize} = require('sequelize');

const dotenv = require('dotenv');
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME , process.env.DB_USER,process.env.DB_PASSWORD ,{
    host:process.env.DB_HOST,
    dialect:'postgres'
})


const dbcheck =  async()=>{

    try {
        await sequelize.authenticate();
        console.log('database connected successfully')

    } catch (error) {
       
        console.log('error occured', error)
    }

}
dbcheck()


module.exports = sequelize