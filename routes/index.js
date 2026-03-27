const express=require('express')
const router=express.Router()
const User=require('../modules/user/userRoutes')
const authRouter=require('../modules/auth/authRoutes')
const ProductRoutes=require('../modules/products/productsRoutes')

router.use('/auth',authRouter)
router.use('/user',User)
router.use('/product',ProductRoutes)
module.exports=router