import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './views/Main/Main'
import Profile from './views/ProfileUser/Profile'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import Products from './views/Products/Products'
import ProfileAdmin from './views/ProfileAdmin/ProfileAdmin.'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from './views/Cart/cart'


function App() {

  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountPtoducts] = useState(0);

  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>

          <Route path='/Admin/*' element={<ProfileAdmin/>}>
          </Route>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Profile/*' element={<Profile/>}></Route>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </ShoppingCartProvider>
    </>
  )
}



export default App
