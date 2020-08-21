import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const BASE_URl = 'https://conduit.productionready.io/api';

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    axios(`${BASE_URl}${url}`, options)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading, options, url]);

  return [{ response, isLoading, error }, doFetch];
};
