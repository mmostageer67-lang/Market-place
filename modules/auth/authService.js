const User=require('../auth/authModel')
const registeUser=async(data)=>{
 const user=  await User.create(data)
 return user
}
module.exports=registeUser