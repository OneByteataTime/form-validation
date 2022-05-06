<template>
  <div class="about">
    <h1>Profile</h1>
    <Profile />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Profile from '../components/Profile.vue'

export default Vue.extend({
  components: { Profile }
})
</script>
<style scoped>
 h1 {
   color: teal;
   margin-left: 8px;
 }
</style>