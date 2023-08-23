import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UserProvider from "../context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <>
          <NewUser />
          <Users />
        </>
      </UserProvider>
    </>
  );
}

export default App;
