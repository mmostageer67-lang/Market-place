const express=require('express')
const router=express.Router()

const { getAllUserControllers }=require('./userControllers')
router.get('/getAllUsers',getAllUserControllers)
module.exports=router