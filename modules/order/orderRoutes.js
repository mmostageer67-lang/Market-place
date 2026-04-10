const express=require('express')
const router=express.Router()
const authMiddleware=require('../../middleware/authMiddleware')
const { createOrderController, getOrderController } = require('./orderController')
router.post('/create',authMiddleware,createOrderController)
router.get('/',authMiddleware,getOrderController)

module.exports=router