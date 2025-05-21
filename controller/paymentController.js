
const {payment} = require('../models');

exports.CreatePayment = async(req,res)=>{

    const{paymentMethod,status,transactionReference,paidAt} = req.body ;

    try {
        const paym = await payment.create({paymentMethod,status,transactionReference,paidAt});
        res.status(201).json({message:'payment created successfully' , paym})
    } catch (error) {
        
        console.log('error occured', error)
    }

}