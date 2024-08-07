import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Cart from './components/cart/cart.tsx'
import CreateCart from './components/cart/createCart.tsx'
import GetCartById from './components/cart/getCartbyId.tsx'
import UpdateCart from './components/cart/updateCart.tsx'
import DeleteCart from './components/cart/deleteCart.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="cart" element={<Cart />} />
          <Route path="cart/:id" element={<GetCartById />} />
          <Route path="createCart" element={<CreateCart />} />
          <Route path="updateCart" element={<UpdateCart />} />
          <Route path="deleteCart" element={<DeleteCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
