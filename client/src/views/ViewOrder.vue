<template>
    <div>
        <h1>Order List</h1>
        <table class="ui celled compact table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Date Order</th>
                    <th>Status</th>
                    <th colspan="3">Menu</th>
                </tr>
            </thead>
            <tr v-for="(order, index) in orders" :key="index">
                <td>
                    <img :src="order.img" style="width:150px; height:220px; object-fit:cover;"></img>
                    <br></br>
                    {{ order.name }} - {{ order.address }} - {{ order.phone }}
                </td>
                <td>{{ order.quantity }}</td>
                <td>{{ order.totalPrice }} $</td>
                <td>{{ order.dateOrder }}</td>
                <td>{{ order.status }}</td>
                <td width="75">
                    <a class="ui green button" @click.prevent="onUpdate(order._id)">Update</a>
                </td>
                <td width="75">
                    <a class="ui red button" @click.prevent="onDelete(order._id)">Delete</a>
                </td>
            </tr>
        </table>
    </div>
    
</template>




<script>
import {ref, onMounted } from "vue";
import {viewOrders, deleteOrderById, updateOrderById } from "../helpers/api";
import { useRoute } from 'vue-router';
export default {
    name: 'ViewOrder',
    setup(){
        const orders = ref([]);
        const route = useRoute();

        onMounted(async () =>{
            orders.value = (await viewOrders()) || [];
        });

    const onDelete = async (id) => {
        const deleteConfirm = window.confirm("are you sure to delete this product?")
        if (deleteConfirm){
            await deleteOrderById(id);
            orders.value = orders.value.filter((order) => order._id !== id);
        }
    };

    const onUpdate = async (id) => {
        const updateConfirm = window.confirm("are you sure to update this order?")
        if (updateConfirm){
            const order = orders.value.find(order => order._id ==id);

            let newstatus;
            if (order.status === 'not done'){
                newstatus = 'done';
            } else {
                newstatus = 'not done';
            }
            await updateOrderById(id, {status: newstatus});
            order.status = newstatus
        }
    }

        return{
            orders,
            onDelete,
            onUpdate,
        };
    },
};
</script>


