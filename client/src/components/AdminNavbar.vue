<template>
    <div id="app">
        <div class="ui top attached secondary menu navbar">
            <div class="item">
                <span class="ui header brand-text">Greenwich</span>
            </div>

            <div class="menu">
                <router-link to="/admin/product" class="item nav-item">Product</router-link>
                <router-link to="/admin/new" class="item nav-item">New Product</router-link>
                <router-link to="/admin/order" class="item nav-item">View Order</router-link>
                <router-link to="/" class="item">Back to home</router-link>
                
                <a @click.prevent="Logout" class="item"><i class="sign out icon"></i>Logout</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AdminNavbar',
    methods: {
        Logout() {
            localStorage.removeItem('userToken');
            delete axios.defaults.headers.common['Authorization']; 
            this.$router.push('/login');
        }
    }
};
</script>
