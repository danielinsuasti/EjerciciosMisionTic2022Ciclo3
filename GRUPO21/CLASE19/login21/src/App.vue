<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <!-- Si se encuentra en la ruta de admin, que NO  muestre  el navigation, en caso contrario que  muestre el navigation -->
    <header v-show ="!['Admin', 'Categorias', 'Articulos', 'Usuarios'].includes($route.name)"> 
      <the-navigation/>
    </header>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: { TheNavigation },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
