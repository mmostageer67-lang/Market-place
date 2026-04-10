const express=require('express')
const router=express.Router()
const authMiddleware=require('../../middleware/authMiddleware')
const { createOrderController } = require('./orderController')
router.post('/create',authMiddleware,createOrderController)
module.exports=router