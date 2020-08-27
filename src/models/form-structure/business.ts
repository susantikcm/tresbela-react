import { IFieldScheme } from "../interface/iFieldScheme";

export const BUSINESS_FORM: IFieldScheme[] = [
    {
        name: "businessName",
        label: "Business Name",
        type: "text",
        options: [],
        value:'',
        required: true,
        group: ''
    },
    {
        name: "businessNo",
        label: "Business Registration No.",
        type: "text",
        options: [],
        value:'',
        required: true,
        group: ''
    }
];

export const BUSINESS_DATA = [
    {
        name: "businessName",
        label: "Business Name",
        type: "text",
        required: true,
        group: ''
    },
    {
        name: "businessNo",
        label: "Business Registration No.",
        type: "text",
        required: true,
        group: ''
    }
];