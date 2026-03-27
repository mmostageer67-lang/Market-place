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
module.exports={createProduct}