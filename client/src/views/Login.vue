<template>
  <div class="login-container">
    <div class="login-card">
      <form @submit.prevent="Login" class="login-form">

        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required placeholder="Enter username"/>
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required placeholder="Enter password"/>
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'; 
import '@/styles/login.css'

const username = ref('');
const password = ref('');
const router = useRouter();


const Login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      username: username.value,
      password: password.value
    });
    
    const token = response.data.token;
    localStorage.setItem('userToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    router.push('/admin/product'); 

  } catch (error) {
    console.error('Login failed:', error);
    
    alert('Wrong username or password');

    localStorage.removeItem('userToken');
    delete axios.defaults.headers.common['Authorization'];
  }
};
</script>