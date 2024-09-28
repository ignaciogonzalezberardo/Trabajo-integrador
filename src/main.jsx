import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/form.css'
import { BrowserRouter } from 'react-router-dom'
import OrderProvider from './context/OrderContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <OrderProvider> 
      <App />
      </OrderProvider>
    </BrowserRouter>
  </StrictMode>,
)
