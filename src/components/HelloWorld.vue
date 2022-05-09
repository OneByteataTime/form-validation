<template>
  <v-container>
    <v-row class="text-center">
      {{ msg }}
    </v-row>
    <v-card flat :loading="this.envelope.isLoading">
      <v-form ref="form" lazy-validation @dataLoaded="onLoadingComplete">
        <v-row>
          <v-col cols=6>
            <BusinessContact :isLoading="isLoading" :contact="envelope.quote.businessContactDetail" />
          </v-col>
          <v-col cols= 6>
            <Address :envelope="envelope"/>
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
  import { QuoteEnvelope, Quote } from '@/models/quote'

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
        envelope: new QuoteEnvelope(true, undefined),
        isLoading: true
      } 
    },
    methods: {
      onLoadingComplete () {
        this.$refs.form.validate();
      },
      onClick(e: Event) {
        this.envelope = new QuoteEnvelope(false, undefined)
      }
    },
    async created () {
      console.log('Hello World created')
      this.companyName = "created"
      const quote = await QuoteService.getQuote(1, 4000)
        .then(quote => {
            console.log('Hello world quote fetched...')
            this.envelope = new QuoteEnvelope(false, quote)
            this.isLoading = false
        })
    },
    mounted () {
      console.log('HelloWorld mounted...')
      this.companyName = "mounted..."
    },
    watch: {
      envelope(now: QuoteEnvelope, then: QuoteEnvelope) {
        console.log('HelloWorld envelope changed...')
        if (now.quote) {
          console.log("validate form...")
          this.$refs.form.validate()
        }
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
