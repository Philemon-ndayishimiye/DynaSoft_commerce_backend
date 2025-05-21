

const express = require('express');

const app = express()
const dotenv = require('dotenv');
dotenv.config()

const sequelize = require('./config/db')

const port = process.env.PORT;

const userRoutes = require('./Routes/userRoutes')
const productRoutes = require('./Routes/productRoutes');
const brandRoutes = require('./Routes/brandRoutes');
const CategoryRoutes = require('./Routes/categoryRoutes');
const wareHouseRoutes = require('./Routes/warehouseRoutes');
const shippingAddress = require('./Routes/shippingRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const whishListRoutes = require('./Routes/whishlistRoutes');
const inventoryRoutes = require('./Routes/inventoryRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const CartItemRoutes = require('./Routes/cartItemRoutes');
const Manager = require('./Routes/WareHousemanagerRoutes');
const Cart = require('./Routes/cartRoutes');
const orderItem = require('./Routes/orderItemRoutes')


app.use(express.json())

//base routes
app.use('/users' , userRoutes);
app.use('/product' , productRoutes);
app.use('/brand',brandRoutes );
app.use('/category',CategoryRoutes);
app.use('/warehouse', wareHouseRoutes );
app.use('/address' ,shippingAddress );
app.use('/order' , orderRoutes);
app.use('/whishlist', whishListRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/payment' , paymentRoutes);
app.use('/cartitem' , CartItemRoutes);
app.use('/Managerware', Manager);
app.use('/cart', Cart );
app.use('/orderItem', orderItem)
 


sequelize.sync().then(
    ()=>{
        app.listen(port , ()=>{

        console.log(`server is running on port ${port}`)
})
    }
)

