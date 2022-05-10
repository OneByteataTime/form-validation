import { Address, AddressInput, BusinessContactDetail, ContactInput, Quote, WorkingQuote } from '@/models/quote'
import Vue from 'vue'
import Vuex, { Action, ActionTree } from 'vuex'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    workingStorage
  }
}

export default new Vuex.Store<RootState>(store)
