<template>
    <div>
        <h1>sdfsd</h1>
        <Product @deleteProductEvent = "deleteProduct" :productListProps="productList" />
        <a href='#' @onclick.prevent="addProduct">Add product</a>
        
    </div>
</template>

<script>
    import Product from '../components/Product.vue';
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                var1 : "List of products:"
            }
        },
        methods: {
            deleteProduct(id) {
                this.$store.dispatch('deleteProduct',id);
            },
            addProduct() {
                
            }
        },
        components: {
            'Product' : Product
        },
        computed: {
            ...mapGetters(
                {
                    productList : "ProductList"
                }
            )
        },
        mounted: function() {
            this.$store.dispatch('loadProductList');
        },
        created() {
        }
    }
</script>

<style scoped>
    
</style>