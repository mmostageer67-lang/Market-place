const express=require('express')
const router=express.Router()

const { getAllUserControllers, getUsersByIdControllers, updateUserController }=require('./userControllers')
const authMiddleware=require('../../middleware/authMiddleware')
router.get('/getAllUsers',getAllUserControllers)
router.get('/getUser/:id',authMiddleware,getUsersByIdControllers)
router.put('/update/:id',authMiddleware,updateUserController)
module.exports=router