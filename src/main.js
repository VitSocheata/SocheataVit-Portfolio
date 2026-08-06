import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

import BaseButton from '@/components/common/BaseButton.vue';
import BaseTitle from '@/components/common/BaseTitle.vue'

const app = createApp(App);
app.component('BaseButton',BaseButton)
app.component('BaseTitle',BaseTitle)

app.use(router);
app.use(i18n);
app.mount('#app');
