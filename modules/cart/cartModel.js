const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
required:true,
    ref:'User'
},
items:[{
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    },
    price:{
        type:Number,
        required:true,
        min:[0,"the price must be positive"]
    },
    quantity:{
        type:Number,
        required:true,
        min:[1,"the quantity must be positive"]
    }
}]
},{timestamps:true})
module.exports=mongoose.model('cart',cartSchema)