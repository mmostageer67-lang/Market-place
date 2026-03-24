const User =require('./userModel')
const getAllUsers=async()=>
{
const user=await User.find()
if(!user|| user.length === 0)
    {throw new Error("user not found")
      }
return user

}
const getUserById=async (id) => {
    const user=await User.findById(id)
    if(!user)
    {throw new Error("user not found");
    
      }
    return user

}
const updateUser=async (id,data) => {
  const user =await User.findByIdAndUpdate(id,data,{
    new:true,
    runValidators:true
  })
  {
    if(!user)
    {throw new Error("user not found");
    
      }

  }

}
const deleteUser=async (id) => {
  const user=await User.findByIdAndDelete(id)
  if(!user)
  {
    throw new Error("user not found!");
    
  }
  return user
}
module.exports={getAllUsers,getUserById,updateUser,deleteUser}