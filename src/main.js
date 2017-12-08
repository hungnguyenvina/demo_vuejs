import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import {routes} from './router/route.js'
import store from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.url.options.root = 'http://localhost:3000/';

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes` ES6 shorthand syntax
});

Vue.http.interceptors.push((request, next) => {
  var accessToken = window.localStorage.getItem('usertoken');//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE1MDk1MDk0OTMsImV4cCI6MTUwOTU5NTg5M30.7ucLLMR8RYTMLhk5tW-egPoMP1FnQ6icUhtXLGDyWWY"
  console.log('accessToken :',accessToken);
  request.headers.set('x-access-token', accessToken)
  next()
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
