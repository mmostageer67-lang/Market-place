const express=require('express')
const { addToCartController, getCartController, updateCartController, deleteCartController } = require('./cartController')
const authMiddleware=require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/add',authMiddleware,addToCartController)
router.get('/',authMiddleware,getCartController)
router.put('/update',authMiddleware,updateCartController)
router.delete('/delete',authMiddleware,deleteCartController)
module.exports=router