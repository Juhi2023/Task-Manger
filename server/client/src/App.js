import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './componenets/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home/> }/>  
              <Route path='login' element={<Login/> }/>  
              <Route path='signup' element={<Signup/> }/>   
              <Route path='dashboard' element={<Dashboard/> } />
              <Route exact path="*" element={<Error />}/>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
