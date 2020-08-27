import { SHOP_ACTION_TYPES } from './shop.types';

const INITAL_STATE = {
    shops: [],
    isLoading: false,
    error: ''
}

const shopReducer = (state=INITAL_STATE, action={}) => {
    switch(action.type) {
        case SHOP_ACTION_TYPES.REQUEST_LOADING:
            return { ...state, isLoading:true }
        case SHOP_ACTION_TYPES.REQUEST_SUCCESS:
            return { ...state, shops:action.payload, isLoading: false }
        case SHOP_ACTION_TYPES.REQUEST_FAILED:
            return { ...state, error:action.payload, isLoading: false }
        default:
            return state;  
    }
}
export default shopReducer;
 