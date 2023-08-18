import React from "react";

import "./country.css";

const Country = (props) => {
  const {
    name: { common },
    capital,
    region,
    population,
    flags: { png },
  } = props.country;

  const RemoveCountry = (common) => {
    props.onCountries(common);
  };
  return (
    <article className="country">
      <div>
        <img src={png} alt={common} className="flag" />
        <h3>Name: {common}</h3>
        <h4>Capital: {capital}</h4>
        <h4>Region: {region}</h4>
        <h4>Polulation: {population}</h4>
        <button
          className="btn"
          onClick={() => {
            RemoveCountry(common);
          }}
        >
          Remove country
        </button>
      </div>
    </article>
  );
};

export default Country;
