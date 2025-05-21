
const {inventory} = require('../models') ;

exports.createInventory = async(req,res)=>{

    const{quantity}= req.body

    try {
        const invent = await inventory.create({quantity});
        res.status(201).json({message:'inventroy created', invent})
    } catch (error) {

        console.log('error occured', error)
        
    }
}