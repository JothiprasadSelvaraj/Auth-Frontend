import { useState } from 'react'
import './App.css'
import SignUP from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

function App() {

  return ( 
    <>
      <Routes>
          <Route path='/' element={ <SignUP></SignUP> }></Route>
          <Route path='/login' element={ <Login></Login> }></Route>
          <Route path='/home' element={ <Home></Home> }></Route>
      </Routes>
    </>
   )

}

export default App
