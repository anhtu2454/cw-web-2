<template>
<div>
    <h1>New Product</h1>
    <form action="" @submit.prevent="onSubmit">
    <div class="ui labeled input fluid">
        <div class="ui label">Name product</div>
        <input type="text" required v-model="product.name" />
    </div>
    <br />

    <div class="ui labeled input fluid">
        <div class="ui label">Product code</div>
        <input type="text" required v-model="product.product_code" />
    </div>
    <br />

    <div class="ui labeled input fluid">
        <div class="ui label">Price</div>
        <input type="text" required v-model="product.price" />
    </div>
    <br />

    <div class="ui labeled input fluid">
        <div class="ui label">Image</div>
        <input type="text" required v-model="product.img" />
    </div>
    <br />

    <button class="ui primary button">Submit</button>
    </form>
</div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addNewProduct } from '@/helpers/api';

export default {
    name: 'New',
    setup() {
        const product = ref({});
        const router = useRouter();
        
        const onSubmit = async () => {
            await addNewProduct(product.value);
            router.push('/admin/product');
        };

        return {
            product,
            onSubmit
        };
    }
};
</script>