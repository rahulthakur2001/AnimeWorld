import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/Categories/Categories';


function App() {

  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
