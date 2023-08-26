import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Error from './pages/Error'
import Protected from './protected/Protected'

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)

  return (
    <>
    <BrowserRouter>
        <Navbar />

        {isLogedIn ? <button onClick={()=>{setIsLogedIn(!isLogedIn)}}>Log Out</button> : <button onClick={()=>{setIsLogedIn(!isLogedIn)}}>Log In</button>}

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Protected isLogedIn={isLogedIn}>
                  <Contact />
            </Protected>}></Route>
            <Route path='*' element={<Error />}></Route>

        </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
