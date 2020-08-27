import axios, { AxiosResponse } from "axios";
import * as ROUTES from '../components/routes/routes.paths';
import { IShopForm } from "../models/interface/iFormScheme";

axios.defaults.baseURL = 'http://localhost:5000/api';

// const responseData = (response : AxiosResponse) => response.data;
// const source = axios.CancelToken.source();

// const request = {
//     get: (url: string) => axios.get(url, {cancelToken: source.token})
//         .then(responseData)
//         .catch(error => { 
//             if(axios.isCancel(error))
//                 console.log(error)
//             else
//                 throw error;
//         }),
//     post: (url: string, data: {}) => axios.post(url, data).then(responseData)
//         .catch(error => { 
//             if(axios.isCancel(error))
//                 console.log(error)
//             else
//                 throw error;
//         }),
//     put: (url: string, data: {}) => axios.put(url, data).then(responseData)
//         .catch(error => { 
//             if(axios.isCancel(error))
//                 console.log(error)
//             else
//                 throw error;
//         }),
//     del: (url: string) => axios.delete(url).then(responseData)
//         .catch(error => { 
//             if(axios.isCancel(error))
//                 console.log(error)
//             else
//                 throw error;
//         }),

// }

// const Shops = {
//     list: () =>  request.get(ROUTES.SHOP_LIST),
//     details: (id: string) => request.get(ROUTES.SHOP_DETAILS),
//     create: (shop: IShopForm) => request.post(ROUTES.SHOP_UPDATE, shop),
//     update: (shop: IShopForm) => request.put(ROUTES.SHOP_UPDATE, shop),
//     delete: (id: string) => request.del(ROUTES.SHOP_DELETE)
// }
// export default { Shops };