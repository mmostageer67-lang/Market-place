const express=require('express')
const { createProductController, getAllProductConroller, getProductByIdController } = require('./productControllers')
const authMiddleware = require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/create',authMiddleware,createProductController)
router.get('/',getAllProductConroller)
router.get('/getUser/:id',authMiddleware,getProductByIdController)
module.exports=router