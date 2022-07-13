import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import ContextProvider from './context'

import './styles/reset.css'
import './styles/globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
