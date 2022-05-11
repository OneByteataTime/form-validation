import { Quote } from "@/models/quote";
import QuoteService from "@/services/quote-service";
import { ActionContext, ActionMethod, mapActions } from "vuex";
import { QuoteState, RootState, StoreModules } from "../types";
import { QuoteStateMutations } from "./mutations";

export type Actions = {
    fetchQuote: (id: number) => Promise<void>
}

export type ActionTreeAdaptor<Type extends Record<string, ActionMethod>, QuoteState, RootState> = {
    [Key in keyof Type]: (a: ActionContext<QuoteState, RootState>, ...p: Parameters<Type[Key]>) => ReturnType<Type[Key]>;
}

export const actions: ActionTreeAdaptor<Actions, QuoteState, RootState> = {
    async fetchQuote({ commit }, id: number) {
        commit(QuoteStateMutations.SetIsFetching, true)
        QuoteService.getQuote(id, 1000)
            .then((quote?: Quote) => {
                commit(QuoteStateMutations.UpdateQuote, quote)
                commit(QuoteStateMutations.SetIsFetching, false)
            })
    }
}

export const mappedActions = mapActions(StoreModules.WorkingStorage, [
    'fetchQuote'
])