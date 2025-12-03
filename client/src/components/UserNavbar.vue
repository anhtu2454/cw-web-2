<template>
    <div id="app">
        <div class="ui top attached secondary menu navbar">
            <!-- Logo -->
            <div class="item">
            <span class="ui header brand-text">Greenwich</span>
            </div>

            <div class="menu">
            <router-link to="/home" class="item nav-item">Home</router-link>
            <router-link to="/admin" class="item nav-item">Admin</router-link>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name: 'UserNavbar'
}
</script>

