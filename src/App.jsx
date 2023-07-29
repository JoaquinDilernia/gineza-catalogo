import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Catalogo from './components/Catalogo/Catalogo'
import Contacto from './components/Contacto/Contacto'
import Error404 from './components/Error404/Error404'




function App() {

  return (
    <>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </>
  )
}

export default App
