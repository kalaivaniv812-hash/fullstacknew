import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Logout from './components/Logout'

const App = () => {
  return (<> 
  <Navbar/>
  

  

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/logout' element={<Logout/>}/>
  </Routes>
  
  
  
  
  </>
    
  )
}

export default App