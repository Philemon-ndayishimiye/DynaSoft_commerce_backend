
const {OrderItem} = require('../models');

exports.createrOrderItem = async(req , res)=>{

    const{quantity} = req.body

    try {
        const orderitem = await OrderItem.create({quantity});
        res.status(201).json({message:'order item  created successfully', orderitem})
    } catch (error) {
        
        console.log('error occured', error)
    }
}