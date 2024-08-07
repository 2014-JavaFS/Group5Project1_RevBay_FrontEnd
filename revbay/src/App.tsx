import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home'
import UserProfile from './components/user-profile'
import Login from './pages/login'
import Signup from './pages/signup'
import NavigationBar from './components/navigation-bar'

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
          <Route path="user-profile" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}
