export interface BusinessContactDetail {
    companyName: string;
    personName: string;
}

export interface Quote {
    id: number;
    number: string;
    businessContactDetail: BusinessContactDetail;
}
