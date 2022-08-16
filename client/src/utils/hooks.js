import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    }
    fetchUrl();
  }, [url]);

  return [data];
}

export { useFetch };
