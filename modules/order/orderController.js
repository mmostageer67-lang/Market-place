const { createOrder, getOrder } = require("./orderService")

const createOrderController=async(req,res,next)=>
{
    try {
        const userId=req .user.id
        const order=await createOrder(userId)
        res.status(200).json({success:true,
            message : 'order created successfuly',
            order
       } )
    } catch (error) {
        next(error)
    }
}
const getOrderController=async(req,res,next)=>
{
    try {
        const userId=req.user.id
        const orders=await getOrder(userId)
        res.status(200).json({
            success:true,
            length: orders.length,
            orders
        })
    } catch (error) {
        next(error)
    }
}
module.exports={createOrderController,getOrderController}