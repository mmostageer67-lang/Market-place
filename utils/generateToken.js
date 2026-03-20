const jwt=require('jsonwebtoken')
const genrateToken =(userId)=>
{
    return jwt.sign(
        {id:userId},
        process.env.Jwt_SECRET,
        {expiresIn:'1d'}
    )
}
module.exports=genrateToken