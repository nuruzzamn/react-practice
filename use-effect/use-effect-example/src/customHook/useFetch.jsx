import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  
  const [data, setdata] = useState(null)
  const [isloading, setisloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetch(url)
    .then((res)=>{

      if (!res.ok){
        throw error("Finding error");
      } else{
        return res.json();
      }
      
    })
    .then((data)=>{
      setdata(data)
      // console.log(todos)
      setisloading(false)
      setError(null)
    })
    .catch((error)=>{
      setError(error.message)
      setisloading(false)
    }) 

    
  }, [url])

  return {data, isloading, error}
}

export default useFetch