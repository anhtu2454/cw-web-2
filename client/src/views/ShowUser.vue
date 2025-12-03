<template>
    <div class="information">
        <div class="image-product">
            <img :src="product.img"/>
            <div class="content">
                <div class="name">{{ product.name }}</div>
                <div class="product-code">Product code: {{ product.product_code }}</div>
                <div class="price">Price: {{ product.price }}$</div>

                <h3>Ingredients:</h3>
                <div class="description"> {{ product.description }}</div>

                <div class="quantity-box">
                    <label>Quantity:</label>
                    <button class="btn-circle" @click="decreaseQty">-</button>
                    <span class="qty">{{ quantity }}</span>
                    <button class="btn-circle" @click="increaseQty">+</button>
                </div>
                <div class="total-price"><strong>Total price: {{ product.price * quantity }} $</strong></div>

                <div class="address">Address: 
                <input type="text" required v-model="product.address"></input>
                </div>

                <div class="phone">Phone:
                <input type="text" required v-model="product.phone"></input>
                </div>

                <button class="order-btn" @click="orderProduct">Order now</button>

            </div>
        </div>
    </div>
</template>

<script>
import '@/styles/show.css';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { viewAllProductById, createOrder } from '../helpers/api';

export default {
    name: 'Show',
    setup() {
        const product = ref({});
        const route = useRoute();
        const quantity = ref(1);

        const increaseQty = () => quantity.value++;
        const decreaseQty = () => { 
            if (quantity.value > 1) quantity.value--; 
        };

        const orderProduct = async () => {
            const orderData = {
                name: product.value.name,
                quantity: quantity.value,
                address: product.value.address,
                phone: product.value.phone,
                totalPrice: product.value.price * quantity.value,
                img: product.value.img,
                status: 'not done'
            };

            try {
                await createOrder (orderData);
                alert("Order successfuly!");
            } catch (err) {
                console.log(err);
                alert("Order fail!");
            }
        };

        onMounted(async () => {
            product.value = await viewAllProductById(route.params.id);
        });

        return { product, quantity, increaseQty, decreaseQty, orderProduct };
    },
};

</script>
