const {registerUser,loginUser}=require('./authService')
const register=async(req,res)=>
{
    try {
        const user=await registerUser(req.body)
       
        res.status(201).json({
            success:true,
            message :'User cerated successfully.',
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
const login =async (req,res) => {
    try {
const { email, password } = req.body
const user = await loginUser(email, password)
        res.status(201).json({
            success:true,
            message:'the user log in succesfully',
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
module.exports={register,login}