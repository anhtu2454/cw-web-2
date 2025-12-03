const orderModel = require('../models/orderModel')

const createOrder = async (req, res) => {
    try{
        const order = req.body
        await orderModel.create(order)
        res.status(201).json(order)
    } catch (err){
        console.error(err)
    }
}

const viewOrders = async (req, res) =>{
    try{
        const orders = await orderModel.find({})
        res.status(200).json(orders)
    }catch (err){
        console.error(err)
    }
}

const updateOrderByID = async (req,res) =>{
    try{
        const id = req.params.id
        const order = req.body
        await orderModel.findByIdAndUpdate(id, order)
        res.json({"message" : "update successed !"})
    } catch (err) {
        console.error(err)
    }
}

const deleteOrderByID = async (req,res) => {
    try{
        const id = req.params.id
        await orderModel.findByIdAndDelete(id)
        res.json({message : 'delete success'})
    } catch (err){
        console.error(err)
    }
}


module.exports = {
    createOrder,
    viewOrders,
    updateOrderByID,
    deleteOrderByID
}