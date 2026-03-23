const User =require('../user/userModel')
const getAllUsers=async()=>
{
const user=await User.find()
return user

}
module.exports={getAllUsers}