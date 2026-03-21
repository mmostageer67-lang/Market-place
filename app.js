const express=require('express')
const app =express()
const routes=require('./routes/index')
const errorMiddleware=require('./middleware/errorMiddleware')
const morgan =require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/api',routes)
app.use(errorMiddleware)
module.exports=app
