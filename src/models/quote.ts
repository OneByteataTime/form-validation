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

export class ContactInput implements BusinessContactDetail {
    constructor (public companyName: string, public personName: string) {
        this.companyName = companyName
        this.personName = personName
    }
}

export class AddressInput implements Address {
    constructor(public addressLine1: string, public addressLine2: string) {
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
    }
}

export class QuoteFactory {
    constructor (public quote: Quote | undefined) {
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
