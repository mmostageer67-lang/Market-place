const { addToCart } = require("./cartService")

const addToCartController=async(req,res,next)=>
{
    try {
        const{quantity,productId}=req.body
        const userId=req.user.id
         const cart=await addToCart(productId,userId,quantity)
         res.status(201).json({
            success:true,
            message:"the itmes addedd successfully",
            cart
         })
    } catch (error) {
        next(error)
    }
   
}
module.exports={addToCartController}