
const dbconn = require('../config/db');

const {DataTypes} = require('sequelize');

const User = dbconn.define('Users', {

    fullName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[5]

        }
    },

    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]

        }
    },

    isVerified:{
         type: DataTypes.BOOLEAN,
         defaultValue: false
    },

    token:{

        type:DataTypes.STRING
    }
})

module.exports = User

