import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { MyContextProvider } from './common/context'
import { MyUserContextProvider } from './common/userContext'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    
    <MyUserContextProvider> 
    <MyContextProvider>
    <App />
    </MyContextProvider>
    </MyUserContextProvider>
         
  </React.StrictMode>,
)