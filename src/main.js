
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from '/App.vue';
import {routes} from './routes.js';
import Store from './store/store.js';

//ToDo: Import routes.js and use the {} passing routes
//ToDo: Import store/store.js and name it store

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://finalproject-ad6d3.firebaseio.com/';//ToDo: Set Equal to your Firebase Database URL

Vue.filter('currency', (value) => {
  return "$" + value.toLocalString()
  //ToDo: Return value.toLocalString(), Add $ sign before the value
});

const router = new VueRouter({
  routes,
  mode: 'history'

});

new Vue({
  el: '#app',
  router,
  Store,
  render: h => h(App)
})
