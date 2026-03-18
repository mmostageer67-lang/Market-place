const app = require('./app')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`the server is starting ${PORT}`)
        })
    } catch (error) {
        console.log(`server fail to start: ${error.message}`)
        process.exit(1)
    }
}

startServer()
