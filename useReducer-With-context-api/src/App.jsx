import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import { UserContext } from "../context/UserContext";
import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer/UserReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <>
          <NewUser />
          <Users />
        </>
      </UserContext.Provider>
    </>
  );
}

export default App;
