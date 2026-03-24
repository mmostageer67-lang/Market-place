const express=require('express')
const router=express.Router()

const { getAllUserControllers, getUsersByIdControllers }=require('./userControllers')
const authMiddleware=require('../../middleware/authMiddleware')
router.get('/getAllUsers',getAllUserControllers)
router.get('/getUser/:id',authMiddleware,getUsersByIdControllers)
module.exports=router