import { IFieldScheme } from "../interface/iFieldScheme";
  
export const SHOP_FORM: IFieldScheme[] = [
    { name: "id", type: "text", label: "Business Name", required: true },
    { name: "category", type: "text", label: "Shop Name", required: true },
    { name: "imageUrl", type: "text", label: "Business Type", required: true },
    { name: "linkUrl", type: "text", label: "Images", required: false }
];