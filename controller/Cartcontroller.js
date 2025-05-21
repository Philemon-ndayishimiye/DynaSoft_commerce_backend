
const {Cart} = require('../models')

exports.createCart = async(req,res)=>{

    const{createdAt} = req.body

    try {
        const cart = await Cart.create({createdAt})
        res.status(201).json({message:'cart created successfully', cart});
    } catch (error) {
        
        console.log('error occured', error)
    }

}