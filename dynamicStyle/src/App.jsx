import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const error = false;

  const [name, setName] = useState("");
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [name]);

  console.log(name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      {/* using inline style
      <h1 style={{ color: error ?'red' : 'green' , 
                   backgroundColor :error ?'green' : 'red'}}> Welcome </h1> */}

      {/* using inline style with state variable */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        // style={{ backgroundColor: inputValid ? "green" : "red" }}
        // not using inline style
        className={`${inputValid ? 'valid' : 'inValid'}`}  
      />
    </>
  );
}

export default App;
