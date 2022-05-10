import { QuoteState, RootState } from '../types'

export const state: QuoteState = {
    contactInput: undefined,
    addressInput: undefined,
    quote: undefined
}

const namespaced: boolean = true

export const workingStorage: Module<QuoteState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}