const User=require('../user/userModel')
const bcrypt=require('bcrypt')
const roleMiddleware=require('../../middleware/roleMiddleware')
const genrateToken=require('../../utils/generateToken')
const registerUser = async (data) => {
  const { name, email, password ,role} = data;

  const user = await User.create({
    name,
    email,
    password,
    role
  });

  return user;
};
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

const token =genrateToken(users._id)
return {token,user:users}

    }
module.exports={registerUser,loginUser}