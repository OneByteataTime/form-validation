import { Quote } from "@/models/quote";
import { GetterTree } from "vuex";
import { QuoteState, RootState } from "../types";

export enum GetterTypes {
    GET_QUOTE = "GET_QUOTE"
}

export const getters: GetterTree<QuoteState, RootState> = {
    workingQuote(state): Quote | undefined {
        return state.workingQuote
    }
}