require('./bootstrap');

import {createApp, defineComponent } from 'vue';

import App from './components/App.vue';


import VueAxios from 'vue-axios';
import axios from 'axios';


import router from './routes'
const root = defineComponent({/* ... */})

//Create the app
const app = createApp(App);

//Configure the app
app.use(router)
   .use(VueAxios,axios)

//Attach global components to the app


//Mount the app
app.mount('#app')