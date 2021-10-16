<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="About">About</router-link>
      <router-link to="Login" v-if = "!isLogin" >Login</router-link>
      <router-link to="Admin" v-else >Admin</router-link>
    </div>
</template>


<script>
export default {
    name : 'TheNavigation',
    computed : {
      isLogin(){
        return localStorage.getItem('token')// revisamos si existe un token en el LocalStorage, si eso pasa es porque esta logueado
      }
    }
    
    
}
</script>


<style scoped>

#nav {
    display:flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 40px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>