
const {WishList} = require('../models') ;

exports.createWhishList = async(req,res)=>{

    const{quantity} = req.body

    try {
        const whishlist = await WishList.create({quantity});
        res.status(201).json({message:'whish list created' , whishlist})

    } catch (error) {
        console.log('error occured', error)
        
    }
}