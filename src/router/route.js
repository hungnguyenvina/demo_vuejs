import ProductList from '../components/ProductList.vue';
import ProductAdd from '../components/ProductAdd.vue';
import ProductUpdate from '../components/ProductUpdate.vue';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';

export const routes = [
    { path: '/home', component: Home,  name: 'home' },
    { path: '/login', component: Login,  name: 'login' },
    { path: '/add', component: ProductAdd,  name: 'product_add' },
    { path: '/update/:id', component: ProductUpdate,  name: 'product_update' },
    { path: '/list', component: ProductList,  name: 'product_list' }
];

