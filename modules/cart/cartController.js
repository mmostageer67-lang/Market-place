const { addToCart, getCart, updateCart, deleteCart } = require("./cartService")
 const formatCart=(cart)=>
         {
return{
    ...cart.toObject(),
  items:  cart.items.map(item=>({
    ...item.toObject(),
        total:item.price*item.quantity
}))
}
         }
const addToCartController=async(req,res,next)=>
{
    try {
        const{quantity,productId}=req.body
        const userId=req.user.id
         const cart=await addToCart(productId,userId,quantity)
        
         const formattedCart=formatCart(cart)

         res.status(201).json({
            success:true,
            message:"the itmes addedd successfully",
            cart:formattedCart
         })
    } catch (error) {
        next(error)
    }
   
}
const getCartController=async(req,res,next)=>
{
    try {
        const userId=req.user.id
const cart=await getCart(userId)
       
const formatedCart=formatCart(cart)
res.status(200).json({
    success:true,
    cart:formatedCart
})  
    } catch (error) {
        next(error)
    }
  
}
const updateCartController=async(req,res,next)=>
{
    try {
        const {productId,quantity}=req.body
        const userId=req.user.id
       const cart=await updateCart(productId,userId,quantity)
                const formattedCart=formatCart(cart)

       res.status(200).json({
        success:true,
        message : " cart updated successfuly",
        cart:formattedCart
       }) 
    } catch (error) {
        next(error)
    }
}
const deleteCartController=async(req,res,next)=>
{
    try {
        const userId=req.user.id
       await deleteCart(userId)
        res.status(200).json({
            success:true,
            message:"cart deleted successfully"
            
        })

    } catch (error) {
        next(error)
    }
}
module.exports={addToCartController,getCartController,updateCartController,deleteCartController}