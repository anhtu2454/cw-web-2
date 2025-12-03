import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'semantic-ui-css/semantic.css'

import axios from 'axios';

const token = localStorage.getItem('userToken');
if (token) {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const app = createApp(App)

app.use(router)

app.mount('#app')