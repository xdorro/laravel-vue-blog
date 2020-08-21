/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import App from './components/App';
import VueRouter from 'vue-router';
import { routes }  from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const files = require.context('./components', true, /\.vue$/i, 'lazy');
files.keys().map(key => {    
    const name = key.split('/').pop().split('.')[0];
    Vue.component(name, () => import(/* webpackChunkName: "[request]" */'./components/' + key.slice(2)));
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    // template: '<vue-app></vue-app>',
    router
});
