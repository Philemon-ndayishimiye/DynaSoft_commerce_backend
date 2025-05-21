
const {CreateProduct,getProductById , getProduct} = require('../controller/productController')
const express = require('express');
const router = express.Router();

router.post('/register' , CreateProduct);
router.get('/getAll', getProduct);
router.get('/getproduct/:id', getProductById)

module.exports = router