import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contex/ThemeContex.jsx'
import { LoginProvider } from './contex/LoginContex.jsx'

createRoot(document.getElementById('root')).render(
  <LoginProvider>
  <ThemeProvider>
  <BrowserRouter>
  
    <App />
   
  </BrowserRouter>
  </ThemeProvider>
  </LoginProvider>
)
