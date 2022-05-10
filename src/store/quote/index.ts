import { AddressInput, ContactInput, WorkingQuote } from '@/models/quote'
import { Module } from 'vuex'
import { QuoteState, RootState } from '../types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const state: QuoteState = {
    contactInput: new ContactInput('', ''),
    addressInput: new AddressInput('',''),
    quote: new WorkingQuote(undefined)
}

const namespaced: boolean = true

export const workingStorage: Module<QuoteState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}