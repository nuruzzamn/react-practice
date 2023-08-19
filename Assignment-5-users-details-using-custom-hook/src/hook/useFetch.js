import React, {useEffect, useState} from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw error('Finding error');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setdata(data);
        setisloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setisloading(false);
      });
  }, [url]);

  return { data, isloading, error };
};
export default useFetch;
