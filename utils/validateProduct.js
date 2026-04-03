const validatProduct=(data)=>
{
    const {name,price,stock,category}=data
    const allowCategory=['electronics', 'clothes', 'food']
   if(!allowCategory.includes(category))
   {
    throw new Error("the categories are required");
    
   }

    if(name===undefined||name.trim()===""||price===undefined||stock===undefined||category===undefined)
    {
        throw new Error("these fields are required!");
        
    }
    if(price<0||typeof price !=="number"||stock<0||typeof stock!=="number")
    {
        throw new Error("price &stock must be postive");
    }
   
   
    
}
module.exports=validatProduct