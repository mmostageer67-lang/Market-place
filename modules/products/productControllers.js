const { createProduct, getAllProducts, getProductById } = require("./productService")
const authMiddleware=require('../../middleware/authMiddleware')
const createProductController=async (req,res,next) => {
    try {
        const product=await createProduct(req.body,req.user.id)
        res.status(201).json({
            success:true,
            message:'product created successfully.',
            product
        })
    } catch (error) {
        next(error)
    }
}
const getAllProductConroller=async (req,res,next) => {
    try {
        const products =await getAllProducts()
        
        res.status(200).json({
            success:true,
            length:products.length,
            products
        })
    } catch (error) {
        next(error)
    }
}
const getProductByIdController=async(req,res,next)=>
{
    try {
        const id =req.params.id
        const product = await getProductById(id)
       
        res.status(200).json({
            success:true,
            message:'the user founded successfully',
            product
        })
    } catch (error) {
        next(error)
    }
}
module.exports={createProductController,getAllProductConroller,getProductByIdController}