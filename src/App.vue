<template>
  <div id="app">
  <p>this is common header</p>
     <router-link to="/home" exact>Home</router-link>
     <router-link to="/login" exact>Login</router-link>
     <router-link to="/logout" exact>Logout</router-link>
      <router-link to="/list" exact>Product's list</router-link>
      <router-link to="/add" exact>Add new product</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import ProductList from './components/ProductList.vue';
  import ProductAdd from './components/ProductAdd.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: 'Welcome to Your Vue.js App1111'
    }
  },
  components: {
    'ProductList': ProductList,
    'ProductAdd': ProductAdd
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
