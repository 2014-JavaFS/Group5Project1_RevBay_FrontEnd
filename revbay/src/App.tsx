import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home'
import Login from './pages/login'
import Signup from './pages/signup'
import NavigationBar from './components/navigation-bar'
import TransactionHistory from './components/transaction/getTransactionHistory'
import CheckoutCart from './components/transaction/postCheckoutCart'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './pages/account'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="user/:userId" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="transaction/History" element ={<TransactionHistory />} />
          <Route path="transaction/Checkout"element={<CheckoutCart />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}
