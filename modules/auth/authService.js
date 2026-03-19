const User=require('./authModel')
const bcrypt=require('bcrypt')
const registerUser=async(data)=>{
 const user=  await User.create(data)
 return user
}
const loginUser=async (email,password) => {
    
const users=await User.findOne({email}).select('+password')
if(!users)
{
       throw new Error('invalide passord or email')

}
const isMatch=await bcrypt.compare(password,users.password)
if(!isMatch)
{
    throw new Error('invalide passord or email')
}
users.password=undefined
return users

    }
module.exports={registerUser,loginUser}