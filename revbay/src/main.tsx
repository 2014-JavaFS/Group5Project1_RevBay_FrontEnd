import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsHome from './pages/products-home.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path="/products" element={<ProductsHome></ProductsHome>}></Route>
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
