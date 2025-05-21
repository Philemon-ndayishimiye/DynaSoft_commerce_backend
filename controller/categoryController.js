
const{Category,ProductsModel} = require('../models') ;

exports.CreateCategory = async(req,res)=>{

    const{categoryName,description} = req.body

    try {
        const category = await Category.create({categoryName,description});
        res.status(201).json({message:'category created', category})
    } catch (error) {
        
        console.log('error occured', error)
    }

}



exports.getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findByPk(id, {
            include: {
                model: ProductsModel,
                attributes: ['id', 'productName']
            }
        });

        if (!category) {
            return res.status(404).json('Category not found');
        }

        res.json(category);
    } catch (error) {
        console.log('error occurred', error);
        res.status(500).json('Internal server error');
    }
};
