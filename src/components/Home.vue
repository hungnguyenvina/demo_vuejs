<template>
    <div>
        <h1>Home Page</h1>
        <p v-if="!isAuthenticated">not login</p>
        <div v-if="isAuthenticated">
            <p >welcome, {{ user.name }}</p>
            <a href='#' @click.prevent="logout()" class='btn btn-primary'>Log out</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isAuthenticated: false,
                user: {
                    name:'',
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            logout() {
                window.localStorage.removeItem("userinfo");
                window.localStorage.removeItem("usertoken");
                this.isAuthenticated= false;
                this.user.name = '';
                this.user.email = '';
                this.user.password = '';
                
            }
        },
        components: {

        },
        mounted: function() {
            if (window.localStorage.getItem("userinfo") === null) {
                console.log('user not login !');
            } else {
                console.log(window.localStorage.getItem('userinfo'));
                var  userInfo = JSON.parse(window.localStorage.getItem('userinfo'));
                console.log(window.localStorage.getItem('userinfo'));
                this.user = userInfo;
                this.isAuthenticated= true;
            }
        },
    }
</script>

<style scoped>
    
</style>