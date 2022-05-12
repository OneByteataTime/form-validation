import { Quote, QuoteFactory } from "@/models/quote";
import { GetterTree, mapGetters } from "vuex";
import { QuoteState, RootState, StoreModules } from "../types";

export enum GetterTypes {
    GET_QUOTE = "GET_QUOTE"
}

export type GetterTreeAdaptor<Type, QuoteState, RootState> = {
    [Key in keyof Type]: (state: QuoteState, getters: any, rootState: RootState, rootGetters: any) => Type[Key]
}

export interface Getters {
    workingQuote: Quote | undefined;
    quoteNumber: string;
    customerNumber: string;
    personName: string;
    isLoading: boolean;
}

export const getters: GetterTreeAdaptor<Getters, QuoteState, RootState> = {
    workingQuote (state): Quote | undefined {
        return state.workingQuote
    },
    quoteNumber (state): string {
        return state.workingQuote?.number ?? ''
    },
    customerNumber (state): string {
        return state.workingQuote?.businessContactDetail.number ?? ''
    },
    personName (state): string {
        return state.workingQuote?.businessContactDetail.personName ?? ''
    },
    isLoading (state): boolean {
        return state.isFetching
    }
}

export const mappedGetters = mapGetters(StoreModules.WorkingStorage, [
    'workingQuote',
    'quoteNumber',
    'customerNumber',
    'personName',
    'isLoading'
])