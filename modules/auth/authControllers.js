const {registerUser}=require('./authService')
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
module.exports={register}