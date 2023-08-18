import React , {useState, useEffect} from 'react';

import Users from './components/Users'; 

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setusers] = useState(null)
  const [isloading, setisloading] = useState(true)
  const [error, setError] = useState(null)

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
  
    fetch(url)
    .then((res)=>{
      // console.log('result data',res)

      if (!res.ok){
        throw error("Finding error");
      } else{
        return res.json();
      }
    })
    .then((data)=>{
      setusers(data)

      console.log("show data", data)
      setisloading(false)
      setError(null)
    })
    .catch((error)=>{
      setError(error.message)
      setisloading(false)
    }) 
  }, [])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isloading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      { users && <Users users={users} /> }  
    </div>
  );
};

export default App;
