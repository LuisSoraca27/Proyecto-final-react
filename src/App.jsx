import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, ProductsDetail, Login, Purchases} from './pages'
import { NavBar, LoadingScreen, ProtectedRoutes } from './components'
import { useSelector } from 'react-redux'


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
        <Route element={<ProtectedRoutes/>}> 
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
