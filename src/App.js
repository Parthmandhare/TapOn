import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authen from "./pages/auth/Authen"

// import Nav from "../src/components/Nav"
import Landin from "./pages/Landin"





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
          </Routes> 
          </BrowserRouter>
  </>
  
  
  
  )
}

export default App