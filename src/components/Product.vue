<template>
    <div>
    <h3>{{ this.$store.state.products }}</h3>
        <ul class="list-group" v-for="(item,index) in productListProps">
            <li class="list-group-item">Index : {{index}} - ID : {{item._id}} - Name : {{item.name}} - Price : {{item.price}} 
            <a href='#' @click.prevent="deleteMe(item._id)" class='btn btn-danger'>Delete</a>
            <router-link :to="{ path: 'update/' +  item._id, params: { id: item._id }}" class='btn btn-primary' exact>Update</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['productListProps'],
        data() {
            return {
                
            }
        },
        methods: {
            deleteMe(id) {
                this.$emit('deleteProductEvent',id);    
            }
        }
    }
</script>

<style scoped>
    
</style>