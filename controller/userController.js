
const userModel = require('../model/userModel');

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); 
const sendMail = require('../utils/SendEmail')


exports.CreateUser = async(req, res )=>{

    const{fullName, Email , password}= req.body

    try {
          // Check if user already exists

        const existingUser = await userModel.findOne({ where: { Email } });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already registered' });
        }
        
        const hashedpass = await bcrypt.hash(password , 10);

        const token = crypto.randomBytes(32).toString('hex');

        const user = await userModel.create({fullName , Email , password:hashedpass , token});

        const message = `${process.env.BASE_URL}/verify/${user.id}/${user.token}`

        sendMail(user.Email , 'please verify your email' , message)

        res.status(200).json('email sent to your account successfully')

        

    } catch (error) {
       
        console.log('error occured', error)
    }
}

exports.VerifyEmail = async (req,res)=>{

    const {id , token} = req.body

    try {
        const user = await userModel.findByPk(id)
        if(!user) return res.status(401).json('user not found')

            const token = await userModel.findOne({token: user.token})
                if(!token) return res.json('invalid token')

                    await userModel.findOne({isVerified:true});
                    await userModel.findOne({token:null}) ;

                    res.json('user verified successfully')
        
        


    } catch (error) {
        
        console.log('error occured', error)
    }

}