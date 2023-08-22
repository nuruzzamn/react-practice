import { useState } from 'react'
import './App.css'
import Users from './components/Users'

const data = [{id :1, name: 'zaman'},
              {id :2, name:'nur'},
              {id :3, name:'moon'}]

function App() {
  const [userData, setUserData] = useState(data)

  // console.log(userData)
  return (
    <>
     
     <Users userData={userData}/>
    </>
  )
}

export default App
