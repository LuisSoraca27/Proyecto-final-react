import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, ProductsDetail, Login, Favorites } from './pages'
import { NavBar, LoadingScreen } from './components'
import { useSelector } from 'react-redux'
import Purchases from './pages/Purchases'

function App() {
   

  const isLoading = useSelector( state => state.isLoading)

  return (

    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </HashRouter>
  )
}

export default App
