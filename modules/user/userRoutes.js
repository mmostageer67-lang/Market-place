const express=require('express')
const router=express.Router()

const { getAllUserControllers, getUsersByIdControllers, updateUserController, dleleteUserController }=require('./userControllers')
const authMiddleware=require('../../middleware/authMiddleware')
router.get('/getAllUsers',getAllUserControllers)
router.get('/getUser/:id',authMiddleware,getUsersByIdControllers)
router.put('/update/:id',authMiddleware,updateUserController)
router.delete('/delete/:id',authMiddleware,dleleteUserController)
module.exports=router