const express=require('express')
const { createProductController, getAllProductConroller } = require('./productControllers')
const authMiddleware = require('../../middleware/authMiddleware')
const router=express.Router()
router.post('/create',authMiddleware,createProductController)
router.get('/',getAllProductConroller)

module.exports=router