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