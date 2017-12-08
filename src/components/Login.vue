<template>
    <div>
        <h1>Login:</h1>
         <form>
            <div class="form-group">
                <label for="txtEmail">Email:</label>
                <input v-model="user.email" type="text" class="form-control" id="txtEmail">
               
            </div>
            <div class="form-group">
                <label for="txtPassword">Password:</label>
                <input v-model="user.password" type="password" class="form-control" id="txtPassword">
            </div>
            
            <button @click.prevent="login" type="button" class="btn btn-default">Login</button>
        </form> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email:'abc@gmail.com',
                    password:'1234567'
                }
            }
        },
        methods: {
            login() {
                alert('testing111');
                
                this.$http.post('http://localhost:3000/authenticate',this.user)
                    .then(response => {
                        console.log(response);
                        var successLogin = response.body.success;
                        if(successLogin) {
                            alert('Login successfully!');
                            window.localStorage.setItem('usertoken',response.body.token);
                            window.localStorage.setItem('userinfo', JSON.stringify(response.body.user));
                            this.$router.push({ name: 'home' }) //  { path: '/home', component: Home,  name: 'home' },
                        } else {
                            alert('Invalid user name or password!');
                            window.localStorage.setItem('usertoken','no');
                        }
                        
                    },error => {
                        console.log(error);
                    })
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    
</style>