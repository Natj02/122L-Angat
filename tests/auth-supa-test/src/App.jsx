import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/*Home*/}
        <Route path="/" element={<Home />}/>

        {/*Register*/}
        <Route path="/register" element={<Register />}/>

        {/*Login*/}
        <Route path="/login" element={<Login />}/>

        {/*Dashboard*/}
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
