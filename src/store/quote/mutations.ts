import { WorkingQuote } from "@/models/quote";
import { MutationTree } from "vuex";
import { QuoteState } from "../types";

export const mutations: MutationTree<QuoteState> = {
    quoteLoaded(state, payload: WorkingQuote) {
        state.quote = payload
    }
}