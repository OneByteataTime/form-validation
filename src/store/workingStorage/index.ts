import { AddressInput, ContactInput, QuoteFactory } from '@/models/quote'
import { mapState, Module } from 'vuex'
import { QuoteState, RootState, StoreModules } from '../types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const state: QuoteState = {
    contactInput: new ContactInput('', '', ''),
    addressInput: new AddressInput('',''),
    workingQuote: new QuoteFactory(undefined).quote,
    isFetching: true
}

export const mappedState = mapState(StoreModules.WorkingStorage, [
    'contactInput',
    'addressInput',
    'workingQuote',
    'isFetching'
])

const namespaced = true

export const workingStorage: Module<QuoteState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}