<template>
  <div id="app">

    <UserNavbar v-if="!isAdminPage" />
    
    <AdminNavbar v-if="isAdminPage" />

    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue' 

import UserNavbar from '@/components/UserNavbar.vue'
import AdminNavbar from '@/components/AdminNavbar.vue'

const route = useRoute()

const isAdminPage = computed(() => route.path.startsWith('/admin'))
</script>
