import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardProvider from "./context/CartContext";
import PizzasProvider from "./context/PizzasContext";
import UserProvider from "./context/UserContext"
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzasProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </PizzasProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
