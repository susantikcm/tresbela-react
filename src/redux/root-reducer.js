import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
//get the actual local storage object on window browser 
// import storage from 'redux-persist/lib/storage'; 

import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';
import categoryReducer from './category/category.reducer';
import shopReducer from './shop/shop.reducer';

// const persistConfig = {
//     //at what point, inside our rootReducer object do we want to start persisting everything in the local object  
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// }

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    shop: shopReducer
 });

export default rootReducer;//persistReducer(persistConfig, rootReducer);
