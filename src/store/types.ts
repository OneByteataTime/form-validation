import { ContactInput, AddressInput, Quote } from "@/models/quote";

export const state = {

}
export interface RootState {
    version: string;
}

export interface QuoteState {
    contactInput?: ContactInput;
    addressInput?: AddressInput;
    workingQuote?: Quote;
    isFetching: Boolean;
}