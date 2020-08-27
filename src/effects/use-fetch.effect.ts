import { useState, useEffect } from 'react';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

// const responseData = (response : AxiosResponse) => response.data;

const source = axios.CancelToken.source();

export const useFetch = (url: string) => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url, { cancelToken: source.token })
      .then(response => response && setData(response.data))
      .catch(error => { 
        if(axios.isCancel(error))
          console.log(error)
        else
          throw error;
      });
    };

    fetchData();
  }, [url]);

  return data;
}