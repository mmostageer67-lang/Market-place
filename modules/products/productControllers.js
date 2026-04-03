const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("./productService")
const {validatProduct,validatUpdateProduct} = require("../../utils/validateProduct")
const createProductController=async (req,res,next) => {
    try {
        validatProduct(req.body)
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
const updateProductController=async (req,res,next) => {
    try {
        validatUpdateProduct(req.body)
        const product=await updateProduct(req.params.id, req.body, req.user.id)
        res.status(200).json({
            success:true,
            message:'the product updated successfully',
            product
        })
    } catch (error) {
        next(error)
    }
}
const deleteProductController=async(req,res,next)=>
{
    try {
       const product =await deleteProduct(req.params.id,req.user.id)
res.status(200).json({
    success:true,
    message:'product deleted successfully.',
    
})
    } catch (error) {
        next(error)
    }
}
module.exports={createProductController,getAllProductConroller,getProductByIdController,updateProductController,deleteProductController}