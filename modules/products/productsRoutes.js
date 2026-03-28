const express=require('express')
const { createProductController, getAllProductConroller, getProductByIdController, updateProductController } = require('./productControllers')
const authMiddleware = require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/create',authMiddleware,createProductController)
router.get('/',getAllProductConroller)
router.get('/getUser/:id',authMiddleware,getProductByIdController)
router.put('/apdateProduct/:id',authMiddleware,updateProductController)
module.exports=router