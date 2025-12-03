const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    address: String,
    phone: Number,
    totalPrice: Number,
    img: String,
    status: String,
    dateOrder: {
        type: Date,
        default: Date.now
    }
    
})

const orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel