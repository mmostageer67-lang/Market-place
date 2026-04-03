const {registerUser,loginUser}=require('./authService')
const genrateToken=require('../../utils/generateToken')
const {validateRegister,validateLogin } = require('../../utils/validation')
const register=async(req,res,next)=>
{
    try {
        validateRegister(req.body)
        const user=await registerUser(req.body)
       
        res.status(201).json({
            success:true,
            message :'User cerated successfully.',
            user
        })
    } catch (error) {
               next(error)

    }
}
const login =async (req,res,next) => {
    try {
        validateLogin(req.body)

const { email, password } = req.body
const user = await loginUser(email, password)
const token=genrateToken({id: user._id, role: user.role})
        res.status(201).json({
            success:true,
            message:'the user log in succesfully',
            user,
            token
        })
    } catch (error) {
       next(error)
    }
}
module.exports={register,login}