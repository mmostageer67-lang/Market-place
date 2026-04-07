const express=require('express')
const { addToCartController, getCartController } = require('./cartController')
const authMiddleware=require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/add',authMiddleware,addToCartController)
router.get('/',authMiddleware,getCartController)
module.exports=router