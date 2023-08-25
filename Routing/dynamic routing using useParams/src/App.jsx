
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../page/Home'
import Contact from '../page/Contact'
import Blogs from '../page/Blogs'
import Blog from '../page/Blog'
import Error from '../page/Error'
import NavBar from './NavBar'


function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/blogs' element={<Blogs />}> </Route>
          <Route path='/blogs/:title' element={<Blog />}> </Route>
          <Route path='*' element={<Error />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
