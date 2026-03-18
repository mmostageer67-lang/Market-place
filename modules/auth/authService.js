const User=require('./authModel')
const registerUser=async(data)=>{
 const user=  await User.create(data)
 return user
}
module.exports=registerUser