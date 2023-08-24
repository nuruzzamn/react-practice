
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../page/Home'
import Contact from '../page/Contact'
import Blog from '../page/Blog'
import Error from '../page/Error'
import NavBar from '../NavBar'

function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/blog' element={<Blog />}> </Route>
          <Route path='*' element={<Error />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
