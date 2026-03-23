const mongoose =require('mongoose')
const roleModel=require('../../middleware/roleMiddleware')
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
        unique:true,
        match:[/^\S+@\S+\.\S+$/, 'Please use a valid email']
    },
    password:
    {
        type:String,
        required:[true,'password is required.'],
        select:false,
        minlength:[6,'Password must be at least 6 characters']
    },
    role:
    {
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{timestamps:true})
userSchema.pre('save',async function () {
    if(!this.isModified('password'))return

     this.password=await bcrypt.hash(this.password,10)
})
module.exports=mongoose.model('User',userSchema)