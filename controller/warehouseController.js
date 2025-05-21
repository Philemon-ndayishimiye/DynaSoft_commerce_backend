
const {Warehouse} = require('../models')


exports.createWarehouse = async(req,res)=>{

    const{location} = req.body

    try {
        const warehouse = await Warehouse.create({location});
        res.status(201).json({message:'warehouse created ', warehouse});

    } catch (error) {

        console.log('error occured', error)
        
    }

}