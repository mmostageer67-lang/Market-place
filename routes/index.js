const express=require('express')
const router=express.Router()
const User=require('../modules/user/userRoutes')
const authRouter=require('../modules/auth/authRoutes')
const ProductRoutes=require('../modules/products/productsRoutes')
const cartRoutes=require('../modules/cart/cartRoutes')
const orderRoutes=require('../modules/order/orderRoutes')
router.use('/auth',authRouter)
router.use('/user',User)
router.use('/product',ProductRoutes)
router.use('/cart',cartRoutes)
router.use('/Order',orderRoutes)

module.exports=router