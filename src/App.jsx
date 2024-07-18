import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
 import Home from './Pages/Home/Home'
 import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginSignup from './Pages/Login/LoginSignup'

const App = () => {
  
  const[showLogin, setShowLogin]= useState()
  return (
    <>
    
   
    <div className='app'>
      
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>

      /* importing the pages by routing */
        <Route path='/login' element ={<LoginSignup/>} />
        < Route path='/' element ={<Home/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      
      </Routes>
      </div>
    <Footer/>
   
    </>
  )
}


export default App
