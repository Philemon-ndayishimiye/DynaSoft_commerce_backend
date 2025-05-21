
const {Brand} = require('../models') ;

exports.createBrand = async(req,res)=>{

    const{brandName , description} = req.body

    try {
        const brand = await Brand.create({brandName , description});
        res.status(201).json({message:'brand created' , brand})
    } catch (error) {
        
        console.log('error occured', error)
    }

}