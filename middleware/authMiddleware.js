const jwt=require('jsonwebtoken')
const User=require('../modules/auth/authModel')
const authMiddleware=async(req,res,next)=>
{
    try {
        const authHeader=req.headers.authorization
        
        if(!authHeader||!authHeader.startsWith("Bearer "))
        {
            return res.status(401).json({
                success:false,
                message:'please check token format or authorization header'
            })
        }
        const token=authHeader.split(' ')[1]
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:'token is missing'
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
       const user=await User.findById(decoded.id).select('-password')
        if (!user) {
    return res.status(401).json({
        success: false,
        message: 'User not found'
    })
}

req.user = user
next()
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Not authorized token failed'
        })
    }
}
module.exports=authMiddleware