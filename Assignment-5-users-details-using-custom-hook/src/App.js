import React, { useState, useEffect } from "react";

import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  const { data, isloading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [usersCopy, setUsersCopy] = useState(data);
  const [filterData, setFilterData] = useState(usersCopy);

  useEffect(() => {
    setUsersCopy(data);
    setFilterData(data);
  }, [data]);

  const handleDeleteUser = (id) => {
    const filter = filterData.filter((user) => user.id !== id);

    setFilterData(filter);
  };

  console.log("user filter ", filterData);

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();

    const newUsers = usersCopy.filter((user) => {
      const userName = user.name.toLowerCase();

      return userName.startsWith(value);
    });

    setFilterData(newUsers);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isloading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {filterData && (
        <Users users={filterData} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
