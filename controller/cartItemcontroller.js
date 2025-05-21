
const {CartItem} = require('../models');

exports.CreateCartItem = async(req,res)=>{

    const{quantity} = req.body

    try {
        const cartItem = await CartItem.create({quantity});
        res.status(201).json({message:'cartitem created successfully', cartItem})
    } catch (error) {
        
        console.log('error occured', error )
    }
}