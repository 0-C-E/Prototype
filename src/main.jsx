import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/Prototype">
            <App />
        </BrowserRouter>
    </StrictMode>
)
