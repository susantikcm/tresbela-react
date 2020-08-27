import { IFieldScheme } from "../interface/iFieldScheme";
  
export const SHOP_FORM: IFieldScheme[] = [
    { name: "shopName", type: "text", label: "Shop Name", required: true },
    { name: "businessTypes", type: "dropdown", label: "Business Type", required: true, options: ['Barber', 'Hair Saloon', 'Body Hair', 'Face Hair', 'Skin Care', 'Nails', 'Massage', 'Brow & Lash', 'Other'] },
    { name: "businessName", type: "text", label: "Business Name", required: true },
    { name: "businessNo", type: "text", label: "Business No", required: true },
    { name: "address", type: "text", label: "Address", required: true },
    { name: "country", type: "text", label: "Country", required: true },
    { name: "phone", type: "text", label: "Phone", required: true },
    { name: "contactDetails", type: "array", label: "Contact Details", required: false },
    { name: "open", type: "time", label: "Open", required: false },
    { name: "close", type: "time", label: "Close", required: false },
    { name: "logo", type: "text", label: "Logo", required: false },
    { name: "images", type: "text", label: "Images", required: false },
    { name: "description", type: "text", label: "description", required: true },
];