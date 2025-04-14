import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import '../index.css'
import './App.css'

// Import components
import LandingPage from './Landing/LandingPage.jsx'
import GamePage from './GamePage.jsx'
import TileTheif from './TileTheif/TileTheif.jsx'
import WinningPage from './Winning/WinningPage.jsx'
import LosingPage from './Losing/LosingPage.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/theme-thief" element={<TileTheif />} />
          <Route path="/win" element={<WinningPage />} />
          <Route path="/lose" element={<LosingPage />} />
          {/* Redirect any unknown routes to the landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App