import React, { useState } from "react";

export const UserContext = React.createContext({});

const UserProvider = ({ child }) => {
  const [userData, setUserData] = useState([
    { id: 1, name: "zaman" },
    { id: 2, name: "nur" },
    { id: 3, name: "moon" },
  ]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {child}
    </UserContext.Provider>
  );
};

export default UserProvider;
