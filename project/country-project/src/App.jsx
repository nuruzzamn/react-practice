import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [filterData, setFilterData] = useState(country);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Finding error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setCountry(data);
        setisloading(false);
        setFilterData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);

        setisloading(false);
      });
  }, []);

  /*
  const fetchData = async (url) =>{
    setisloading(true)
 
    try {
      const reesponse = await fetch(url)
      const data = await reesponse.json();
 
      // console.log("from App", data)
  
      setCountry(data);

      setisloading(false)
      setError(null)

        console.log("setCountry from else", country )

    } catch (error) {
      setisloading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url])
  
*/

  const handleRemove = (name) => {
    // alert(name);

    const filterCountriesData = filterData.filter(
      (country) => country.name.common !== name
    );
    setFilterData(filterCountriesData);
  };

  const handleSearch = (searchData) => {
    // alert(searchData)

    const value = searchData.toLowerCase();

    const NewCountries = country.filter((country) => {
      const CountryName = country.name.common.toLowerCase();
      return CountryName.startsWith(value);
    });
    setFilterData(NewCountries);
  };

  // console.log("out site", filterData);

  return (
    <>
      <h1>Country App</h1>
      {isloading && <p style={{ textAlign: "center" }}> Loading ... </p>}
      {error && <p style={{ textAlign: "center" }}> {error} </p>}

      <Search onSearch={handleSearch} />
      {filterData && (
        <Countries country={filterData} onRemoveCountries={handleRemove} />
      )}
    </>
  );
}

export default App;
