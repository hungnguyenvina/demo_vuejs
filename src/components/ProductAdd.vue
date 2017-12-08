<template>
    <div>
        <h1>Add new product:</h1>
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
            <button @click.prevent="saveProduct" type="button" class="btn btn-default">Save</button>
        </form> 
    </div>
</template>

<script>
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
            saveProduct() {
                alert('testing111');
                this.$store.dispatch('addProduct',this.product);
                //console.log(this.product.name);
                //this.$http.post('http://localhost:3000/products',this.product)
                //    .then(response => {
                //        console.log(response);
                //    },error => {
                //        console.log(error);
                //    })
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    
</style>