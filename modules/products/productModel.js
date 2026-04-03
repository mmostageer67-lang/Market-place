const mongoose=require('mongoose')
const productSchema=new mongoose.Schema ({
name:{
    type:String,
    required:[true,'the name is required.'],
    trim:true
},
price:
{
type:Number,
required:[true,'price is required'],
min: [0, 'Price must be positive']
},
description:
{
    type:String,
},
stock:
{
    type:Number,
    
    required:true,
    min: [0, 'stock must be positive']
},
category:
{
    type:String,
    enum: ['electronics', 'clothes', 'food'],
    required: true
},
createdBy:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
}
},{timestamps:true})
module.exports=mongoose.model('Product',productSchema)