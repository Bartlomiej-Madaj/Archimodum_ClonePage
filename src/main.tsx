import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { HeaderContextProvider } from './store/header-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HeaderContextProvider>
  <React.StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </HeaderContextProvider>,
)
