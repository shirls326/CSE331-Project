import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the App component
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
