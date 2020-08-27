import axios from "axios";
import { useFetch } from '../../effects/use-fetch.effect';

import { SHOP_ACTION_TYPES } from './shop.types';

//requestData is 'higher order function'
//the 1st layer function that takes no param would run the code below, then  
//return everything in this function to the second layer function
//the second layer function takes param 'dispatch' will run the same code below
export const requestData = (url, id) => (dispatch) => {
    const url = 'http://localhost:5000/api/shop';

    const request = id ? axios.get(`${url}${id}`) : axios.get({url});
    console.log(url, id);
    request.dispatch({ type: SHOP_ACTION_TYPES.REQUEST_LOADING })
        .then(response => response.data)
        .then(data => dispatch({ type: SHOP_ACTION_TYPES.REQUEST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: SHOP_ACTION_TYPES.REQUEST_FAILED, payload: error }))
}