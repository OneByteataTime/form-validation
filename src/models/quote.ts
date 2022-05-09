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
