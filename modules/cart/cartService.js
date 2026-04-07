
const Cart=require('./cartModel')
const Product=require('../products/productModel')
const addToCart=async(productId,userId,quantity)=>{
    try {
    const product= await  Product.findById(productId)
     if(!product)
     {
        throw new Error("product id not found");
        
     }
     if(quantity>product.stock){
        throw new Error("Not enough stock")
     }
     const cart=await Cart.findOne({user:userId})
     if(!cart){
      return  await  Cart.create({
        user:userId,
        items:[{
            product:productId,
price:product.price,
quantity:quantity}
        ]
       })
     }
const existItem= cart.items.find(item=> 
  item.product.toString()===productId.toString()
)
if (existItem) {
   if (existItem.quantity + quantity > product.stock) {
      throw new Error("Not enough stock")
   }

   existItem.quantity += quantity

}
else{
 cart.items.push({
            product:productId,
price:product.price,
quantity:quantity
        })
    }

    await cart.save()
    } catch (error) {
        throw error
        
    }
 
}
const getCart=async(userId)=>
{
try {
    const cart=await Cart.findOne({user:userId})
    if(!cart)
    {
return  {items: []}
    }
    return cart
} catch (error) {
    throw error
    
}
}
module.exports={addToCart,getCart}