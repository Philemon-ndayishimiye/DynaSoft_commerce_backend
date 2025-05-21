
const {WarehouseManagers} = require('../models');

exports.createWareHouseManager = async(req,res)=>{

    const{name}= req.body

    try {
        const manager = await WarehouseManagers.create({name});
        res.status(201).json({message:'manager created successfully' , manager})
    } catch (error) {
        
        console.log('error occured', error)
    }

}