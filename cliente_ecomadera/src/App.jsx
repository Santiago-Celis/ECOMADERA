import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './views/Main/Main'
import Profile from './views/Profile/Profile'
import Register from './views/Register/Register'
import Login from './views/Login/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>

        <Route path='/Profile/*' element={<Profile/>}>
          
        </Route>
      </Routes>

    </>
  )
}

export default App
