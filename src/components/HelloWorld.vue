<template>
  <v-container>
    <v-row class="text-center">
      {{ msg }}
    </v-row>
    <v-form ref="form" lazy-validation @dataLoaded="onLoadingComplete">
      <v-row>
        <v-col cols=6>
          <BusinessContact />
        </v-col>

      </v-row>
    </v-form>
    
  </v-container>
</template>

<script lang="ts">
  import Vue, { VueConstructor } from 'vue'
  import BusinessContact from '@/components/forms/BusinessContact.vue'

  interface Refs {
      $refs: {
          form: HTMLFormElement
      }
  }

  export default (Vue as VueConstructor<Vue & Refs>).extend({
    name: 'HelloWorld',
    components: { BusinessContact },
    props: { 
      msg: String 
    },
    data: function () {
      return {
        companyName: ''
      } 
    },
    methods: {
      onLoadingComplete () {
        console.log('Data is loaded:', this.$refs)
        this.$refs.form.validate();
      }
    }
  })
</script>
<style scoped>
  div {
    font-size: 1.5em;
    color: teal;
  }  
</style>
