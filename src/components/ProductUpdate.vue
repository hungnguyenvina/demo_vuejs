<template>
    <div>
        <h1>Update product:</h1>
        {{ this.$store.state.products }}
         <form>
            <div class="form-group">
                <label for="txtProductName">Name:</label>
                <input v-model="product.name" type="text" class="form-control" id="txtProductName">
                <p>{{ product.name }}</p>
            </div>
            <div class="form-group">
                <label for="txtProductDescription">Description:</label>
                <input v-model="product.description" type="text" class="form-control" id="txtProductDescription">
            </div>
            <div class="form-group">
                <label for="txtProductPrice">Price:</label>
                <input v-model="product.price" type="text" class="form-control" id="txtProductPrice">
            </div>
            <button @click.prevent="updateProduct" type="button" class="btn btn-default">Save</button>
        </form> 
    </div>
</template>

<script>
    import Product from '../components/Product.vue';
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                product: {
                    name:'',
                    description:'',
                    price:0
                }
            }
        },
        methods: {
            updateProduct() {
                this.$store.dispatch('updateProduct', { 'product': this.product, 'id': this.$route.params.id});
                //this.$http.put('http://localhost:3000/products/'+ this.$route.params.id,this.product)
                //    .then(response => {
                //        console.log(response);
                //    },error => {
                //        console.log(error);
                //    })
            }
        },
        components: {

        },
        computed: {
            //...mapGetters(
            //    {
            //        product1 : "SelectedProduct"
            //    }
            //)
        },
        created() {
            this.$store.getters.SelectedProduct(this.$route.params.id)
            console.log(this.$store.state.selectedProduct)
            this.product = this.$store.state.selectedProduct
            console.log(this.$route.params.id);
            //this.$http.get('http://localhost:3000/product/'+ this.$route.params.id).then(function(response){
                //this.product = response.body;
            //})
        }
    }
</script>

<style scoped>
    
</style>