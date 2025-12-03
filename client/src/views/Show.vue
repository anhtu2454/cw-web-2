<template>
    <div class="information">
        <div class="image-product">
            <img :src="product.img"/>
            <div class="content">
                <div class="name">{{ product.name }}</div>
                <div class="product-code">Product code: {{ product.product_code }}</div>
                <div class="price">Price: ${{ product.price }}</div>
                <h3>Ingredients:</h3>
                <div class="description"> {{ product.description }}</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import '@/styles/show.css';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { viewAllProductById } from '../helpers/api';

export default {
    name: 'Show',
    setup() {
        const product = ref ({});
        const route = useRoute();

        onMounted(async() => {
            product.value = await viewAllProductById(route.params.id);
        })

    return { product };
    },
}
</script>
