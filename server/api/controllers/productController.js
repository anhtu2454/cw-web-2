const productModel = require('../models/productModel')

const viewAllProducts = async (req, res) =>{
    try{
        const products = await productModel.find({})
        res.status(200).json(products)
    }catch (err){
        console.error(err)
    }
}

const createNewProduct = async (req, res) => {
    try{
        const product = req.body
        await productModel.create(product)
        res.status(201).json(product)
    } catch (err){
        console.error(err)
    }
}

const deleteProductByID = async (req,res) =>{
    try{
        const id = req.params.id
        await productModel.findByIdAndDelete(id)
        res.json({message : 'delete success'})
    } catch (err){
        console.error(err)
    }
}

const viewProductByID = async (req,res) => {
    try{
        const id = req.params.id
        const product = await productModel.findById(id)
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
    }
}

const updateProductByID = async (req,res) => {
    try{
        const id = req.params.id
        const product = req.body
        await productModel.findByIdAndUpdate(id, product)
        res.json({"message" : "update successed !"})

    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    viewAllProducts,
    createNewProduct,
    deleteProductByID,
    viewProductByID,
    updateProductByID,
}