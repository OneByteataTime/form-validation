import { AddressInput, BusinessContactDetail, ContactInput, Quote, WorkingQuote } from '@/models/quote'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactInput: new ContactInput('', ''),
    addressInput: new AddressInput('', ''),
    workingQuote: new WorkingQuote(undefined)
  },
  getters: {
  },
  mutations: {
    setWorkingQuote(state, quote) {
      state.workingQuote = quote
    },
    updateContact(state, contact: BusinessContactDetail) {
      if (state.workingQuote.quote) {
        state.workingQuote.quote.businessContactDetail = contact
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
