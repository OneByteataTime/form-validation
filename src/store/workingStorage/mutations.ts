import { Quote, QuoteFactory } from "@/models/quote";
import { MutationTree } from "vuex";
import { QuoteState } from "../types";

export enum QuoteStateMutations {
    UpdateQuote = "updateQuote",
    SetIsFetching = "setIsFetching"
}

export const mutations: MutationTree<QuoteState> = {
    [QuoteStateMutations.UpdateQuote](state, payload?: Quote) {
        state.workingQuote = new QuoteFactory(payload).quote
    },
    [QuoteStateMutations.SetIsFetching](state, payload: boolean) {
        state.isFetching = payload
    }
}