import React from "react";
import { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchTex] = useState("");

  const handleChange = (e) => {
    setSearchTex(e.target.value);
  };

  useEffect(() => {
    // alert(searchText);
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search a country"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
