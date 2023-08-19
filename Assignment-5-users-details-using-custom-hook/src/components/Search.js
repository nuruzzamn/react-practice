 import React, { useState, useEffect } from 'react';

const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);
 
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search name"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
