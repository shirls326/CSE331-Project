import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import './App.css'

// game components
import Tile from '../gameComponents/Tile.jsx'
import NavBar from '../components/navBar.jsx'
import Instructions from '../components/CollapseableMenu/Instructions.jsx'
import WinningPage from './Winning/WinningPage.jsx'

// Tile data: Every 4 tiles are a group, and one in each group is an outlier
const tilesData = [
  { text: "Cobalt", color: "yellow", isOutlier: false },
  { text: "Azure", color: "yellow", isOutlier: false },
  { text: "Crimson", color: "yellow", isOutlier: true },
  { text: "Cyan", color: "yellow", isOutlier: false },

  { text: "Penne", color: "cyan", isOutlier: false },
  { text: "Rigatoni", color: "cyan", isOutlier: false },
  { text: "Spagetti", color: "cyan", isOutlier: true },
  { text: "Baugette", color: "cyan", isOutlier: false },

  { text: "Peru", color: "pink", isOutlier: false },
  { text: "Spain", color: "pink", isOutlier: true },
  { text: "Brazil", color: "pink", isOutlier: false },
  { text: "Ecuador", color: "pink", isOutlier: false },

  { text: "Engine", color: "purple", isOutlier: false },
  { text: "Tire", color: "purple", isOutlier: false },
  { text: "Brakes", color: "purple", isOutlier: false },
  { text: "Propeller", color: "purple", isOutlier: true }
]

function GamePage() {
  const [lives, setLives] = useState(3)
  const navigate = useNavigate()

  // Handle tile selection
  const handleTileClick = (isOutlier) => {
    if (!isOutlier) {
      setLives(lives - 1)
      if (lives - 1 === 0) {
        alert("Game Over! Restarting...");
        setLives(3) // Reset lives on game over
      }
    }
  }

  // Handle Winning
  const handleWin = () => {
    alert("You Win!");
    setLives(3) // Reset lives on win
  }

  // Handle going back to landing page
  const handleBackToHome = () => {
    navigate('/');
  }

  return (
    <div className='page'>
      <NavBar />
      <div className='gamePage'>
        <div className='gameContainer'>
          <button 
            className="back-button" 
            onClick={handleBackToHome}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              padding: '10px 15px',
              backgroundColor: '#00d9bf',
              color: '#030301',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            Back to Home
          </button>
         
          <div className='Screen'>
            {tilesData.map((tile, index) => (
              <Tile 
                key={index} 
                tileText={tile.text} 
                setColor={tile.color} 
                onClick={() => handleTileClick(tile.isOutlier)}
              />
            ))}
          </div>
          <h2>Lives: {lives}</h2>
          <Instructions />
          <WinningPage/>
        </div>
      </div>
    </div>
  )
}

export default GamePage 