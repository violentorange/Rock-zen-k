import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/customformats.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
