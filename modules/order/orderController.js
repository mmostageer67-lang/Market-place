const { createOrder, getOrder, getSingleOder, getAllAdminOrders, updateOrderStatus } = require("./orderService")

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
        const orderId=req.params.id
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
const  updateOrderStatusController=async(req,res,next)=>
{
    try {
        const orderId=req.params.id
const { status: newStatus } = req.body
        const order=await updateOrderStatus(orderId,newStatus)
        if (!newStatus) {
    throw new Error("status is required")
}
        res.status(200).json({
            success:true,
            message:'order status upsated successflly',
            order
        })
    } catch (error) {
        next (error)
    }
}
module.exports={createOrderController,getOrderController,getSingleOrderController,getAllAdminOrdersContrller,updateOrderStatusController}