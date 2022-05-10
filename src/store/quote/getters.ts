import { Quote, WorkingQuote } from "@/models/quote";
import { GetterTree } from "vuex";
import { QuoteState, RootState } from "../types";

export enum GetterTypes {
    GET_QUOTE = "GET_QUOTE"
}

export interface Getters {
    [GetterTypes.GET_QUOTE](state: QuoteState): 
}
export const getters: GetterTree<QuoteState, RootState> = {
    workingQuote(state): WorkingQuote | undefined {
        return state.quote ?? undefined
    }
}