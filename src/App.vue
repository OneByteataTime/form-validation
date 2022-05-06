<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <GlobalNav />
      <div class="d-flex align-center">
        <v-toolbar-title>JasTech Insurance</v-toolbar-title>
      </div>
      
      <v-spacer></v-spacer>

      <router-link to="/" class="global-nav">Home</router-link>
      <router-link to="/About" class="global-nav">Profile</router-link>
     
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import GlobalNav from '@/components/layout/GlobalNav.vue'

export default Vue.extend({
  name: 'App',
  components: { 
    GlobalNav 
  },
  data: () => ({
    //
  }),
});
</script>
<style scoped>
  .global-nav {
    color: white;
    font-size: 1.2em;
    display: inline-block;
    margin-right: 1em;
  }

</style>
