<template>
  <v-container>
    <v-row class="text-center">
      {{ msg }}
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',
    props: { 
      msg: String 
    },
    data: () => ({
      
    }),
  })
</script>
<style scoped>
  div {
    margin-top: 2em;
    font-size: 1.5em;
    color: teal;
  }  
</style>
