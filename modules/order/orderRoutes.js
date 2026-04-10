const express=require('express')
const router=express.Router()
const authMiddleware=require('../../middleware/authMiddleware')
const { createOrderController, getOrderController, getSingleOrderController } = require('./orderController')
router.post('/create',authMiddleware,createOrderController)
router.get('/',authMiddleware,getOrderController)
router.get('/get/:id',authMiddleware,getSingleOrderController)
module.exports=router