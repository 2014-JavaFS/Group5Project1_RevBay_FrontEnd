import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from "./pages/revbayHompage.tsx"
import ProfilePage from "./pages/profilePage.tsx"
import CartPage from "./pages/cartPage.tsx"
import TransactionLog from "./pages/transactionHistoryPage.tsx"
import ShopPage from "./pages/productPage.tsx"
import {BrowserRouter,Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path='Cart' element = {<CartPage/>}/>
        <Route path='Profile' element = {<ProfilePage/>}/>
        <Route path='shop' element = {<ShopPage/>}/>

        <Route path='Profile/userID/transactionHistory' element = {<TransactionLog/>}/>
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>,
)
