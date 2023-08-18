import React from "react";
import Country from "./new/Country";

import "./countries.css";

import { v4 as uuid } from "uuid";

const Countries = (props) => {
  const unique_id = uuid();

  return (
    <section className="countries">
      {props.country.map((country, key) => {
        const countryNew = { country, id: unique_id };
        return (
          <Country
            {...countryNew}
            key={key}
            onCountries={props.onRemoveCountries}
          />
        );
      })}
    </section>
  );
};

export default Countries;
