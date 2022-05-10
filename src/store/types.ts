import { ContactInput, AddressInput, WorkingQuote } from "@/models/quote";

export const state = {

}
export interface RootState {
    version: string;
}

export interface QuoteState {
    contactInput?: ContactInput;
    addressInput?: AddressInput;
    quote?: WorkingQuote
}