<template>
  <div id="app">
    
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <h1 class="font-weight-bold text-white mt-1" href="#">Routes App</h1>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#mylist">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="mylist">
          <div id="nav" class="navbar-nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>            
          </div>
        </div>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<style>

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
