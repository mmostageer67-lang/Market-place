const express=require('express')
const { addToCartController } = require('./cartController')
const authMiddleware=require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/add',authMiddleware,addToCartController)
module.exports=router