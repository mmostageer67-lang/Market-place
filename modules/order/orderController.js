const { createOrder, getOrder, getSingleOder, getAllAdminOrders } = require("./orderService")

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
const getSingleOrderController=async (req,res,next) => {
    try {
        const userId=req.user.id
        const {orderId}=req.params
        const order = await getSingleOder(userId, orderId)

        res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
        next(error)
    }
}
const getAllAdminOrdersContrller=async(req,res,next)=>
{
try {
    const orders=await getAllAdminOrders()
    res.status(200).json({
        success:true,
        length:orders.length,
        orders
    })
} catch (error) {
    next(error)
}
}
module.exports={createOrderController,getOrderController,getSingleOrderController,getAllAdminOrdersContrller}