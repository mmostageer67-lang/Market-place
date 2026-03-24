const {getAllUsers,getUserById} = require("./userService")

const getAllUserControllers=async (req,res,next) => {
    try{
    const user=await getAllUsers()
    if(!user|| user.length === 0)
    {
      return  res.status(400).json({
            cuccess:false,
            message:'users invalid!'
        }) }
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
module.exports={getAllUserControllers,getUsersByIdControllers}