<template>
<div class="home-container">

    <div class="background-image">
        <div class="overlay-content">
            <h1 class="main-title">Order coffee in store or online to enjoy</h1>
            <div class="ui action input url-input">
                <button class="ui button primary">Order now</button>
            </div>
        </div>
    </div>

</div>

    <div class="product">
      <div class="background-product">
        <h1>Product in store</h1>
        <div class="list product">
          <div v-for="product in products" :key="product._id" class="product-card">
            <router-link  :to="{name: 'ShowUser',params: {id:product._id}}"><img :src="product.img" /></router-link>
            
            <div class="name">{{ product.name }}</div>
            <div class="price">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import 'semantic-ui-css/semantic.css'
import '@/styles/home.css'
import { ref, onMounted } from "vue";
import { viewAllProducts } from "../helpers/api";

export default {
  name: "Home",
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        products.value = (await viewAllProducts()) || [];
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    return { products };
  },
};
</script>