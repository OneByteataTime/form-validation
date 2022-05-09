<template>
  <div class="home">
    <Contact msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Contact from '@/components/Conatact.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Contact,
  },
});
</script>
