<template>
  <div>
    <h1>Product List</h1>
    <table class="ui celled compact table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th colspan="3">Menu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td width="75">
            <router-link class="ui button green" :to="{name: 'Show',params: {id:product._id}}">Show</router-link>
          </td>
          <td width="75"> 
            <router-link class="ui button yellow" :to="{name: 'Edit',params: {id:product._id}}">Edit</router-link>
          </td>
          <td width="75">
            <a class="ui red button" @click.prevent="onDelete(product._id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {ref, onMounted } from "vue";
import {viewAllProducts, deleteProductByID } from "../helpers/api";

export default {
  name: "Products",
  setup() {
    const products = ref([]);

    onMounted(async () =>{
        products.value = (await viewAllProducts()) || [];
    });
    
    const onDelete = async (id) => {
        const deleteConfirm = window.confirm("are you sure to delete this product?")
        if (deleteConfirm){
            await deleteProductByID(id);
            products.value = products.value.filter((product) => product._id !== id);
        }
    };

    return {
        products,
        onDelete,
    };
  },
};
</script>
