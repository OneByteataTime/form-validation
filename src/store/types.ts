import { ContactInput, AddressInput, Quote } from "@/models/quote";
import { ActionMethod, ActionContext } from "vuex";

export interface RootState {
    version: string;
}

export interface QuoteState {
    contactInput: ContactInput;
    addressInput: AddressInput;
    workingQuote?: Quote;
    isFetching: boolean;
}

export enum StoreModules {
    WorkingStorage = "workingStorage"
}

export type ActionTreeAdaptor<Type extends Record<string, ActionMethod>, QuoteState, RootState> = {
    [Key in keyof Type]: (a: ActionContext<QuoteState, RootState>, ...p: Parameters<Type[Key]>) => ReturnType<Type[Key]>;
}