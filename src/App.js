import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authen from "./pages/auth/Authen"

// import Nav from "../src/components/Nav"
import Landin from "./pages/Landin"
import Profile from './pages/Profile';
import Update from './pages/Update';
import Dashboard from './pages/Dashboard';





function App() {
  const Login = "login";
  const Register = "register";
  const Uname = "uname";

  return (
  <>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landin/>}/>
            
            <Route path="/auth/:id" element={<Authen/>}/>
            <Route path="/auth/:id" element={<Authen/>}/>
            <Route path="/:id" element={<Authen/>}/>

            <Route path='/dashboard' element={<Dashboard/>} />

<Route path='/update' element={<Update/>} />

<Route path='/profile/:id' element={<Profile/>} />
          </Routes> 
          </BrowserRouter>
  </>
  
  
  
  )
}

export default App