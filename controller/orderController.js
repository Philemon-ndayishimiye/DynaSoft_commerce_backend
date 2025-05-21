
const {Order} = require('../models') ;

exports.createOrder = async(req,res)=>{

    const {totalPrice} = req.body

    try {
        const order = await Order.create({totalPrice});
        res.status(201).json({message:'order created successfully', order})
    } catch (error) {

        console.log('error occured', error)
        
    }

}