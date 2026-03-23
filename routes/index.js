const express=require('express')
const router=express.Router()
const User=require('../modules/user/userRoutes')
const authRouter=require('../modules/auth/authRoutes')
router.use('/auth',authRouter)
router.use('/user',User)
module.exports=router