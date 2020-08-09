import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!setIsLoading) return;
    axios(`${baseUrl}${url}`, options)
      .then((res) => {
        setIsLoading(false);
        setResponse(res);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
      });
  }, [isLoading, url, options]);

  return [{ isLoading, response, error }, doFetch];
};
