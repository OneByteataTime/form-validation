import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { workingStorage } from './workingStorage'
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
