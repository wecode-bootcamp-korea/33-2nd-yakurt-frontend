import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setFetchData(data.results);
        console.log(data);
      });
  }, [url]);

  return fetchData;
};
