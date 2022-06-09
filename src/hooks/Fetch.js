import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setFetchData(data));
  }, [url]);

  return fetchData;
};
