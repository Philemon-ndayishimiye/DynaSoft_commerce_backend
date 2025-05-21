
const {shippingAddress} = require('../models') ;

exports.createShippingAddress =async (req,res)=>{

    const{city, state , postalCode , country} = req.body

    try {
        const address = await shippingAddress.create({city, state , postalCode , country} );
        res.status(201).json({message:'address created' , address})
    } catch (error) {
        
        console.log('error occured', error)
    }

}