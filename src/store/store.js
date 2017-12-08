import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
//Vue.url.options.root = 'http://localhost:3000/';

export default new Vuex.Store({
    state: {
        selectedProduct: {},
        products: []
        //products: [
        //    { id: 1, 'name' : 'Product 1', 'price' : 15000 },
        //    { id: 2, 'name' : 'Product 2', 'price' : 16000 },
        //    { id: 3, 'name' : 'Product 3', 'price' : 17000 },
        //    { id: 4, 'name' : 'Product 4', 'price' : 18000 },
        //]
    },
    getters: {
        ProductList: state => state.products,
        SelectedProduct: (state, getters) => (id) => {
            console.log('state.products:',state.products)
            state.selectedProduct = state.products.filter(todo => todo._id === id)[0]
            console.log('state.selectedProduct:',state.products)
          }
        //console.log(this.$route.params.id);
            //this.$http.get('http://localhost:3000/product/'+ this.$route.params.id).then(function(response){
            //    this.product = response.body;
            //})
    },
    mutations: {
        ADD_PRODUCT(state, product) {
            state.products.push(product);
        },
        UPDATE_PRODUCT(state, {product, id}) {
            console.log('productyyy:', product._id)
            console.log('id:', id)
            state.products.map(function(item){
                console.log('product  before:', item.name)
            })
            //state.products = state.products.filter(item => item._id !== id);
            //state.products.push(product);
            console.log('--------------------------------')
            state.products.map(function(item){
                console.log('product after ff:', item.name)
            })
            
        },
        DELETE_PRODUCT(state, id) {
            state.products = state.products.filter(item => item._id !== id);
        },
        LOAD_PRODUCT_LIST(state, {products}) {
            state.products = products;
        }

    },
    actions: {
        addProduct({commit}, product) {
            Vue.http.post('products', product)
                .then(response => {
                    commit('ADD_PRODUCT',product)
                },error => {
                    console.log(error);
                })
        },
        updateProduct({commit}, {product, id}) {
            Vue.http.put('products/'+ id, product)
                .then(response => {
                    commit('UPDATE_PRODUCT', {product, id})
                },error => {
                    console.log(error);
                })
        },
        loadProductList({commit}) {
            Vue.http.get('products').then(function(response){
                commit('LOAD_PRODUCT_LIST', { products: response.body })
            })
        },
        deleteProduct({commit}, id) {
            Vue.http.delete('products/'+id)
                .then((response) => {
                   if(response.body.status == "success") {
                        commit('DELETE_PRODUCT', id);
                   }
                });
        }
    }
});