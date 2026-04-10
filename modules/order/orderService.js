const Cart=require('../cart/cartModel')
const Order=require('../order/orderModel')
const createOrder=async (userId) => {

        const cart=await Cart.findOne({ user: userId })
       
    if(!cart){
            throw new Error("the Cart  not found!");
            
        }
         if (cart.items.length === 0) {
        throw new Error("Cart is empty")
    }
let totalPrice=0
for(let item of cart.items)
{
    totalPrice+=item.price*item.quantity
}
const items=cart.items.map(item=>

    ({
product:item.product,
price:item.price,
quantity:item.quantity
    })
)
const order=await Order.create({
    user:userId,
    items
    ,
    totalPrice
})
cart.items=[]
 await cart.save()
return order
}
const getOrder=async(userId)=>
{
const orders=await Order.find({user:userId}).sort({createdAt:-1})

return orders
}
const getSingleOder=async(userId,orderId)=>
{
const order = await Order.findById({ user: userId, _id: orderId })
if (order.user.toString() !== userId) {
    throw new Error("not authorized")
}

return order
}
const getAllAdminOrders=async()=>
{
   
        const orders=await Order.find().populate('user','name email').populate('items.product','name price')
       
  return orders
}
module.exports={createOrder,getOrder,getSingleOder,getAllAdminOrders}