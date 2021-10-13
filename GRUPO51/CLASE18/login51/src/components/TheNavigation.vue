<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="About">About</router-link>
      <router-link to="Login">Login</router-link>
      <router-link to="Admin">Admin</router-link>
    </div>
</template>


<script>
export default {
    name : 'TheNavigation',
    
    
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