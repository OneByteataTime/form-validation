import { Quote, QuoteFactory } from "@/models/quote";
import { MutationTree } from "vuex";
import { QuoteState } from "../types";

export const mutations: MutationTree<QuoteState> = {
    updateQuote(state, payload: Quote | undefined) {
        state.workingQuote = new QuoteFactory(payload).quote
    },
    setIsFetching(state, payload: boolean) {
        state.isFetching = payload
    }
}