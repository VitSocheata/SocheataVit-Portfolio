import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import BaseButton from './components/common/BaseButton.vue';

const app = createApp(App);
app.component('BaseButton',BaseButton)

app.use(router);
app.mount('#app');
