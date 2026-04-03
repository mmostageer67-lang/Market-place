const validatProduct=(data)=>
{
    const {price,stock,category,name}=data
 

    if(name===undefined||name.trim()===""||price===undefined||stock===undefined||category===undefined)
    {
        throw new Error("these fields are required!");
        
    }
    
    if(typeof price !=="number"||price<0||stock<0||typeof stock!=="number")
    {
        throw new Error("please write the data correctly");
    }  const  allowCategory=['electronics', 'clothes', 'food']
   if(!allowCategory.includes(category))
   {
    throw new Error("the categories are required");
    
   }} 
  const validatUpdateProduct=(data)=>
{
    const {name,price,stock,category}=data
    const allowUpdateCategory=['electronics', 'clothes', 'food']
   if (category !== undefined && !allowUpdateCategory.includes(category)) {
        throw new Error("Invalid category")
    }
   if (price !== undefined) {
   if (typeof price !== "number" || price < 0) {
      throw new Error("Invalid price");
   }
}if (stock !== undefined) {
   if (typeof stock !== "number" || stock < 0) {
      throw new Error("Invalid stock");
   }
}
   
  if (name !== undefined) {
        if (name.trim() === "") {
            throw new Error("Invalid name")
        }
    }
}

module.exports={validatProduct,validatUpdateProduct}