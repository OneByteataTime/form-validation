<template>
  <v-container>
    <v-row>
      <v-col cols=12>
        <InfoBar :customerName="name" :customerNumber="customerNumber" :number="quoteNumber" />
      </v-col>
    </v-row>
    <v-card flat :loading="isLoading">
      <v-form ref="form" lazy-validation @dataLoaded="onLoadingComplete" class="my-form">
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
    <v-alert class="clickable" shaped outlined type="warning" @click="onClick">{{ quoteNumber }}</v-alert> 
  </v-container>
</template>

<script lang="ts">
  import Vue, { VueConstructor } from 'vue'
  import { mapActions, mapState } from 'vuex'
  import BusinessContact from '@/components/forms/BusinessContact.vue'
  import Address from '@/components/forms/Address.vue'
  import InfoBar from '@/components/global/InfoBar.vue'
  import { QuoteState, StoreModules } from '@/store/types'
  import { mappedActions, Actions } from '@/store/workingStorage/actions'
  import { mappedState } from '@/store/workingStorage'
  import { Getters, mappedGetters } from '@/store/workingStorage/getters'

  interface Refs {
      $refs: {
          form: HTMLFormElement
      }
  }
  
  type Methods = Actions & {
    onLoadingComplete(): void,
    onClick (e: Event): void
  }

  type Computed = QuoteState & Getters

  interface Data {
    quoteIds: Array<number>;
    currentIndex: number;
    companyName: string;
  }

  interface Props {
    msg: string;
  }

  export default (Vue as VueConstructor<Vue & Refs>).extend<Data, Methods, Computed, Props>({
    name: 'Contact',
    components: { BusinessContact, Address, InfoBar },
    props: { 
      msg: String
    },
    data () {
      return {
        companyName: '',
        quoteIds: [ 1, 2, 3, 4],
        currentIndex: 0
      } 
    },
    computed: {
      ...mappedState,
      ...mappedGetters
    },
    methods: {
      ...mappedActions,
      onLoadingComplete () {
        this.$refs.form.validate();
      },
      onClick(e: Event) {
        console.log(this.currentIndex > 3)
        this.currentIndex >= 3 ? this.currentIndex = 0 : this.currentIndex++
        this.fetchQuote(this.quoteIds[this.currentIndex])
      }
    },
    created () {
      console.log('Contact created')
      this.companyName = "created"
      this.fetchQuote(this.quoteIds[this.currentIndex])
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
  .info-bar {
    font-size: 1.2em;
    color: teal;
  } 
  .my-form {
    padding-top: 1em;
  }
  .clickable {
    cursor: pointer;
  }
</style>
