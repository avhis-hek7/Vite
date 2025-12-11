import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFoundPage from './pages/NotFoundPage'
import Mens from './pages/Mens'

const App = () => {
  return (
    <div >
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
         <Route path='/product/mens' element={<Mens/>}/>

        <Route path='*' element={<NotFoundPage/>}/>

       </Routes>
      <Footer/>
    </div>
  )
}

export default App
