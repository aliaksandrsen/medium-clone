import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
