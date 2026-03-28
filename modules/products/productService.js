const Product=require('./productModel')
const createProduct=async(data,userId)=>
{
return await Product.create({
    name:data.name,
    price:data.price,
    description:data.description,
    category:data.category,
    createdBy:userId,
    stock:data.stock
}) 
}
const getAllProducts=async()=>
{
return await Product.find()
}
const getProductById=async(id)=>
{
  const product =    await Product.findById(id)
     if(!product)
     {
        throw new Error("the product not found !");
        
     }
     return product
}
const updateProduct=async (id,data) => {
    const product=await Product.findByIdAndUpdate(id,data,
        {
            new:true,
            runValidators:true
        }
    )
     if(!product)
     {
        throw new Error("the product not found !");
        
     }
          return product

}
const deleteProduct=async (id) => {
    const product=await Product.findByIdAndDelete(id)
     if(!product)
     {
        throw new Error("the product not found !");
        
     }
          return product

}

module.exports={createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}