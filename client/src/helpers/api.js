import axios from "axios";

const backendProduct = 'http://localhost:3000/api/products/';
const backendOrder = 'http://localhost:3000/api/orders/';

//order
export const viewOrders = async () =>{
    try{
        const response = await axios.get(backendOrder);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
}

export const createOrder = async (order) =>{
    try{
        const response = await axios.post(backendOrder, order);
        return response.data;   
    }catch (err){
        console.error(err);
        return null;
    }
};

export const deleteOrderById = async (id) =>{
    try{
        const response = await axios.delete(backendOrder + id);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};

export const updateOrderById = async (id, order) =>{
    try{
        const response = await axios.put(backendOrder + id, order);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};



// product
export const viewAllProducts = async () =>{
    try{
        const response = await axios.get(backendProduct);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};

export const viewAllProductById = async (id) =>{
    try{
        const response = await axios.get(backendProduct + id);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};

export const deleteProductByID = async (id) =>{
    try{
        const response = await axios.delete(backendProduct + id);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};


export const addNewProduct = async (product) =>{
    try{
        const response = await axios.post(backendProduct, product);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};

export const updateProduct = async (id, product) =>{
    try{
        const response = await axios.put(backendProduct + id, product);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};

export const getAllProductById = async (id) =>{
    try{
        const response = await axios.get(backendProduct + id);
        return response.data;
    }catch (err){
        console.error(err);
        return null;
    }
};