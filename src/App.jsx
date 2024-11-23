import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Terms from './Components/Terms/Terms'
import Privacy from './Components/Privacy&Policy/Privacy'
import Footer from './Components/Footer/Footer'
import BrandDirectory from './Components/BrandDirectory/BrandDirectory'
import Slider from './Components/Common/CommonSlider/Slider'
import TopItem from './Components/Common/CommonSlider/TopItem/TopItem'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/topitem' element={<TopItem/>}/>
            <Route path='/swiper' element={<Slider/>}/>
            <Route path='/home' element={<Login/>}/>
            <Route path='/pages/terms' element={<Terms/>}/>
            <Route path='/privacypolicy' element={<Privacy/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/brand_directory' element={<BrandDirectory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
