const express = require('express')

const app = express()

const mongoose = require('mongoose')

const DATABASE_URL = "mongodb://localhost:27017/coffee-management"

mongoose.connect(DATABASE_URL)

.then(() => console.log('Connect to DB succeed!'))

.catch((err) => console.log('Connect to DB failed!'))

app.use(express.json())

const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:8080',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const productRouter = require('./api/routes/productRoute')
const orderRouter = require('./api/routes/orderRoute') 
const authRouter = require('./api/routes/authRoute')

productRouter(app)
orderRouter(app)
authRouter(app)  

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`)
})