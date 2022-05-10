import { Quote } from "@/models/quote";
import QuoteService from "@/services/quote-service";
import { ActionTree } from "vuex";
import { QuoteState, RootState } from "../types";

export const actions: ActionTree<QuoteState, RootState> = {
    fetchQuote({ commit }, id: number): any {
        commit('setIsFetching', true)
        QuoteService.getQuote(id, 4000)
            .then((quote: Quote | undefined) => {
                commit('updateQuote', quote)
                commit('setIsFetching', false)
            })
    }
}