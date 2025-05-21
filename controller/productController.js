
const { ProductsModel,Category } = require('../models'); 
const category = require('../models/category');




exports.CreateProduct = async(req,res)=>{

    const {productName,Images,description,price,categoryId} = req.body

    try {
        
        const product = await ProductsModel.create({productName,Images,description,price,categoryId})

        res.json({message:'product created successfully', product})
    } catch (error) {

        console.log('error occured' , error)
        
    }
}

exports.getProduct = async(req,res)=>{

    try {
        const product = await ProductsModel.findAll();
        res.status(200).json(product)
    } catch (error) {
        
        console.log('error occured', error)
    }

}

exports.getProductById = async(req,res)=>{

    const{id} = req.params

    try {
        const product = await ProductsModel.findByPk(id,{
            include:{
                model:Category,
                attributes:['id','categoryName']
            }
        } );
        if(!product){
            res.json('product not found ');
        }
        else{
            res.json(product)
        }
    } catch (error) {
        
        console.log('error occured', error)
    }

}