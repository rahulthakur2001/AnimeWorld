import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Terms from './Components/Terms/Terms'
import Privacy from './Components/Privacy&Policy/Privacy'
import Footer from './Components/Footer/Footer'
import BrandDirectory from './Components/BrandDirectory/BrandDirectory'
import Slider from './Components/Common/Slider/Slider'
import TopItem from './Components/Common/TopItem/TopItem'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashborard/Dashboard'
import ProductSwiper from './Components/Common/ProductSwiper/ProductSwiper'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>

            <Route path='/' element={<Dashboard/>}/>
            <Route path='/header' element={<Navbar/>}/>
            <Route path='/topitem' element={<TopItem/>}/>
            <Route path='/swiper' element={<Slider/>}/>
            <Route path='/producat' element={<ProductSwiper/>}/>
            <Route path='/home' element={<Login/>}/>
            <Route path='/pages/terms' element={<Terms/>}/>
            <Route path='/privacypolicy' element={<Privacy/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/brand_directory' element={<BrandDirectory/>}/>
            <Route path='/privacypolicy' element={<Privacy/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
