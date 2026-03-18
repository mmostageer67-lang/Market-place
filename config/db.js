const mongoose =require('mongoose')
const connectDB=async()=>
{
    try {
       const conn =mongoose.connect(process.env.MONGO_URI) 
       console.log(`connect to MongoDB ${conn.connection}`)
    } catch (error) {
        console.error(`database has error `,error.message)
    }
}
module.exports=connectDB