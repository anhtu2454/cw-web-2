<template>
    <div>
        <h1>New Product</h1>
        <form action="" @submit.prevent="onSubmit">
            <div class="ui labeled input fluid">
                <div class="ui label">Name</div>
                <input type="text" required v-model="product.name">
            </div>
            <br>
            <div class="ui labeled input fluid">
                <div class="ui label">Product-code</div>
                <input type="text" required v-model="product.product_code">
            </div>
            <br>
            <div class="ui labeled input fluid">
                <div class="ui label">Price</div>
                <input type="text" required v-model="product.price">
            </div>
            <br>
            <div class="ui labeled input fluid">
                <div class="ui label">Link image</div>
                <input type="text" required v-model="product.img">
            </div>
            <br>
            <div class="ui labeled input fluid">
                <div class="ui label">Description</div>
                <textarea required v-model="product.description"></textarea>
            </div>
            <br>
            <button class="ui primary button">Save</button>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { viewAllProductById, updateProduct } from '../helpers/api';

export default {
    name : "Edit",
    setup(){
        const product = ref ({});
        const route = useRoute();
        const router = useRouter();

        onMounted(async() =>{
            const result = await viewAllProductById(route.params.id);
            if (result == null){
                alert("Falied to load product data")
                product.value = {};
            } else{
                product.value = result;
            }
        })

        const onSubmit = async() =>{
            const result = await updateProduct(route.params.id, product.value)
            if(result == null){
                alert("Failed to update product")
                return;
            }
            router.push('/admin/product')
        }

        return{
            product,
            onSubmit
        }
    }
}

</script>
