import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ItemListContainer from './components/Item/ItemListContainer'
import Contacto from './components/Contacto/Contacto'
import Error404 from './components/Error404/Error404'


function App() {

  return (
    <>
    <ChakraProvider>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo' element={<ItemListContainer  />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

      </ChakraProvider>

    </>
  )
}

export default App
