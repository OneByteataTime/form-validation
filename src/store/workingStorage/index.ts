import { AddressInput, ContactInput, QuoteFactory } from '@/models/quote'
import { Module } from 'vuex'
import { QuoteState, RootState } from '../types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const state: QuoteState = {
    contactInput: new ContactInput('', ''),
    addressInput: new AddressInput('',''),
    workingQuote: new QuoteFactory(undefined).quote,
    isFetching: true
}

const namespaced = true

export const workingStorage: Module<QuoteState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}