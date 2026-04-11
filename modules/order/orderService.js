const Cart=require('../cart/cartModel')
const Product=require('../products/productModel')
const Order=require('../order/orderModel')
const validationItemStock=async (items) => {
    for(let item of items)
    {
        const product=await Product.findById(item.product)
        if(!product)
        {
            throw new Error("product not found");
            
        }
        if(product.stock<item.quantity)
        {
            throw new Error(`not enough for stock${product.name}`);
            
        }
        product.stock-=item.quantity
        await product.save()
    }
}
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
        await validationItemStock(items)

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
const order = await Order.findById( orderId )
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
const updateOrderStatus=async (orderId,newStatus) => {
    const valideTransation={
        pending:['paid','cancelled'],
        paid:['shipped','cancelled'],
        shipped:['delivered'],
        delivered:[],
        cancelled:[]
    }
    const order=await Order.findById(orderId)
    if(!order)
    {
        throw new Error("order not found");
        
    }
const currentStatus=order.status
if(!valideTransation[newStatus])
{throw new Error("invalid status");
}
if(!valideTransation[currentStatus].includes(newStatus)){
    throw new Error("invalid status transition");
    
}
order.status=newStatus
await order.save()
return order
}
module.exports={createOrder,getOrder,getSingleOder,getAllAdminOrders,updateOrderStatus}