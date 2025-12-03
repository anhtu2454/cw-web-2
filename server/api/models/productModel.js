const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    product_code: String,
    price: Number,
    img: String,
    description: String
    
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel