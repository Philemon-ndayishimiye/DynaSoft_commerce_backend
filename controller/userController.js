
const userModel = require('../model/userModel');

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); 
const sendMail = require('../utils/SendEmail');
const SendEmail = require('../utils/SendEmail');


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

        res.status(200).json({message:'email sent to your account successfully', user})

        

    } catch (error) {
       
        console.log('error occured', error)
    }
}



exports.Login = async(req,res)=>{

    const{Email , password} = req.body 

    try {
        const user = await userModel.findOne({where: {Email} });
        if(!user){
            res.json('user not found')
        }

          if (!user.isVerified) {

            return res.status(403).json({ message: 'Please verify your email before logging in.' });
        }
        else{

            const hashpass = await bcrypt.compare(password, user.password )

            if(!hashpass){
                res.json('invalid password')
            }
            else{
                const secreteKey = process.env.SecreteKey

                const token = jwt.sign({fullName: user.fullName , Email:user.Email , isVerified:user.isVerified} , secreteKey , {expiresIn:'3h'} )
                res.status(201).json({message:'login successfully', 
                    user:{fullName: user.fullName , Email:user.Email , isVerified:user.isVerified}, 
                    
                  token})
            }
        }


    } catch (error) {
        
    }


}


exports.VerifyEmail = async (req,res)=>{

    const {id , token} =  req.params;

    try {
       
        const user = await userModel.findByPk(id) ;
        if(!user){
            res.json('user not found')
        }

        if(user.token !== token){
            res.json('token does not exist')
        }

        user.isVerified = true ,
        user.token = null

        await user.save()

        res.json('token verified successfully')
        
        


    } catch (error) {
        
        console.log('error occured', error)
    }

}



exports.forgotPassword =async (req,res)=>{

    const{Email} = req.body

    try {

        const user = await userModel.findOne({where:{Email}});
        if(!user){
            res.json('user not found');
        }

        const token = crypto.randomBytes(32).toString('hex');

         user.token = token ;
         await user.save();

         const message = `${process.env.BASE_URL}/reset/${user.id}/${token}`

         SendEmail(user.Email , 'reset your password' , message)

        res.json({message:'email send to your account to reset password',  token  })
        
    } catch (error) {
        console.log('error occured', error)
        
    }
    
}




exports.ResetPassword = async (req, res) => {
    const { id, token } = req.params;
    const { newPass } = req.body;

    try {
        // Check if newPass is provided
        if (!newPass) {
            return res.status(400).json({ message: 'New password is required' });
        }

        const user = await userModel.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.token !== token) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        const hashpass = await bcrypt.hash(newPass, 10);
        user.password = hashpass;
        user.token = null;

        await user.save();

        res.json({ message: 'Password reset successfully' });

    } catch (error) {
        console.log('error occurred:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
