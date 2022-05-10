import { Quote } from "@/models/quote";
import QuoteService from "@/services/quote-service";
import { ActionTree } from "vuex";
import { QuoteState, RootState } from "../types";

export const actions: ActionTree<QuoteState, RootState> = {
    fetchQuote({ commit }): any {
        QuoteService.getQuote(1, 4000)
            .then((quote: Quote | undefined) => {
                commit('quoteLoaded', quote)
            })    
    }
}