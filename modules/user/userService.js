const User =require('./userModel')
const getAllUsers=async()=>
{
const user=await User.find()
return user

}
const getUserById=async (id) => {
    const user=await User.findById(id)
    if(!user)
    {throw new Error("user not found");
    
      }
    return user

}
module.exports={getAllUsers,getUserById}