import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useFetch = (url) => {
  const BASE_URl = 'https://conduit.productionready.io/api';

  const [token] = useLocalStorage('token');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : '',
        },
      },
    };

    if (!isLoading) return;

    axios(`${BASE_URl}${url}`, requestOptions)
      .then((res) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data);
          setIsLoading(false);
        }
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url, token]);

  return [{ response, isLoading, error }, doFetch];
};
