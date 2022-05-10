<template>
  <v-container>
    <v-row class="text-center">
      {{ msg }}
    </v-row>
    <v-card flat :loading="isLoading">
      <v-form ref="form" lazy-validation @dataLoaded="onLoadingComplete">
        <v-row>
          <v-col cols=6>
            <BusinessContact :isLoading="isLoading" />
          </v-col>
          <v-col cols= 6>
            <Address :isLoading="isLoading" />
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    <v-alert shaped outlined type="warning" @click="onClick">{{companyName}}</v-alert> 
  </v-container>
</template>

<script lang="ts">
  import Vue, { VueConstructor } from 'vue'
  import BusinessContact from '@/components/forms/BusinessContact.vue'
  import Address from '@/components/forms/Address.vue'
  import QuoteService from '@/services/quote-service'
import { mapState } from 'vuex'

  interface Refs {
      $refs: {
          form: HTMLFormElement
      }
  }

  export default (Vue as VueConstructor<Vue & Refs>).extend({
    name: 'HelloWorld',
    components: { BusinessContact, Address },
    props: { 
      msg: String 
    },
    data: function () {
      return {
        companyName: '',
      } 
    },
    computed: {
        ...mapState('workingStorage', {
            isLoading: (state: any) => state.isFetching
        })
    },
    methods: {
      onLoadingComplete () {
        this.$refs.form.validate();
      },
      onClick(e: Event) {
        this.companyName = "Clicked"
      }
    },
    created () {
      console.log('Contact created')
      this.companyName = "created"
      this.$store.dispatch('workingStorage/fetchQuote', 2)
    },
    mounted () {
      console.log('Contact mounted...')
      this.companyName = "mounted..."
    },
    updated () {
      console.log('Contact updated...')
    },
    watch: {
      isLoading(now: boolean, then: boolean) {
        if (now == false) {
          this.$refs.form.validate()
        }
        console.log(`IsLoading was: ${then} and now: ${now}`)
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
