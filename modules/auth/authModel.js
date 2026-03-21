const mongoose =require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,'user name is required.']
    },
    email:
    {
        type:String,
        required:[true,'email is required.'],
        unique:true
    },
    password:
    {
        type:String,
        required:[true,'password is required.'],
        select:false
    },
    
},{timestamps:true})

userSchema.pre('save',async function (){
if(!this.isModified('password'))

return 

this.password=await bcrypt.hash(this.password,10) 
})

module.exports=mongoose.model('User',userSchema)