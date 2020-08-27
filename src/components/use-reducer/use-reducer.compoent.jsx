import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

// const responseData = (response : AxiosResponse) => response.data;

const source = axios.CancelToken.source();

const INITIAL_STATE = {
    data: null,
    searchQuery: ''
}

const reducer = (state, action) =>  {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, data: action.payload }
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload }
        default:
            return state;
    }
}

const setUser = data => ({
    type: 'SET_USER',
    payload: data
});

const setSearchQuery = queryString => ({
    type: 'SET_SEARCH_QUERY',
    payload: queryString

});

const useReducerFunc = (url) => {
    //dispatch being a function that we get that allows us to pass action to our reducer
    const [ state, dispatch ] = useReducer({reducer, INITIAL_STATE})
    const { data, searchQuery } = state;

    useEffect(() => {
        if(searchQuery.length > 0) {
            const fetchData = async () => {
                const response = await axios.get(url, { cancelToken: source.token })
                    .catch(error => { 
                        if(axios.isCancel(error))
                        console.log(error)
                        else
                        throw error;
                    }
                );
                const resJson = await response.json(); 
                dispatch(setData(resJson[0]));
            };
        }
        fetchData();
    }, [url]);

    return data;
}

export default useReducerFunc