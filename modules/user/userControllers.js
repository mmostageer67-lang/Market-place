const {getAllUsers,getUserById,updateUser} = require("./userService")

const getAllUserControllers=async (req,res,next) => {
    try{
    const user=await getAllUsers()
    
          res.status(200).json({
            success: true,
             length:user.length,
         message :' get all users successfully',
        
         user
       })
    }catch(error)
    {
        next(error)
    }
}
const getUsersByIdControllers=async (req,res,next) => {
  try {
    const user=await getUserById(req.params.id)
    
      res.status(200).json({
        success:true,
        message:'the user founded .',
        user
      })
  } catch (error) {
    next(error)
  }
}
const updateUserController=async (req,res,next) => {
try {
  const {email,name,password,role}=req.body
if (Object.keys(req.body).length === 0) {
  return res.status(400).json({
    success: false,
    message: "No data provided"
  })
}
  const user=await updateUser(req.params.id,req.body)
  res.status(201).json({
    success:true,
    message :' user updated successfully',
    user
  })} catch (error) {
  next(error)
}
}
module.exports={getAllUserControllers,getUsersByIdControllers,updateUserController}