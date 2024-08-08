import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { MyContextProvider } from './common/context'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
<<<<<<< HEAD
    <MyContextProvider>
    <App />
    </MyContextProvider>
=======
    <App />      
>>>>>>> b8fa61f62e151cc5f1fe7eab4c94be71c3442bad
  </React.StrictMode>,
)