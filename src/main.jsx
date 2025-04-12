import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//importing the pages
import TileTheif from './pages/TileTheif/TileTheif.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TileTheif />
  </StrictMode>,
)
