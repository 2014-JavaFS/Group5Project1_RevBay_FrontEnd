import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { MyContextProvider } from './common/context'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <MyContextProvider>
    <App />
    </MyContextProvider>
  </React.StrictMode>,
)