import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, ProductsDetail, Login, Favorites } from './pages'
import { NavBar, LoadingScreen } from './components'

function App() {


  return (

    <HashRouter>
      <NavBar />
      <LoadingScreen />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </HashRouter>
  )
}

export default App
