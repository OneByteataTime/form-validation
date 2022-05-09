export interface Address {
    addressLine1: string;
    addressLine2: string;
}

export interface BusinessContactDetail {
    companyName: string;
    personName: string;
}

export interface Quote {
    id: number;
    number: string;
    businessContactDetail: BusinessContactDetail;
    address: Address;
}

export class QuoteEnvelope {
    constructor(public isLoading: boolean, public quote: Quote | undefined) {
        this.isLoading = isLoading
        this.quote = quote ? quote : this.getDefaultQuote()
    }

    private getDefaultQuote(): Quote {
        return {
            id: 0,
            number: '',
            businessContactDetail: {
                personName: '',
                companyName: ''
            } as BusinessContactDetail,
            address: {
                addressLine1: '',
                addressLine2: ''
            } as Address
        } as Quote
    }
}
