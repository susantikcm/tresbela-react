export interface IBusinessForm {
    id: string;
    businessName: string;
    businessNo: string;
    description: string;
}

export interface IContactForm {
    name: string;
    phone: string;
    mobile: string
    email: string;
    comment: string;
}

export interface ISignUpForm {
    username: string;
    password: string;
    confrimPassword: string;
}

export interface ISignInForm {
    username: string;
    password: string;
}
  
export interface IShopForm {
    id: string;
    shopName: string;
    businessTypes: [];
    businessName: string;
    businessNo: string;
    address: [];
    phone: string;
    contactDetails?: [];
    open?: number;
    close?: number;
    logo?: string;
    images?: [];
}
