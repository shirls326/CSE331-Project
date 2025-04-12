import { useState } from 'react'
import '../../index.css'
import '../App.css'
import './TileTheif.css'


// game components
import Tile from '../../gameComponents/Tile.jsx'
import NavBar from '../../components/navBar.jsx'

import Instructions from '../../components/CollapseableMenu/Instructions.jsx'

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

function TileTheif() {
  const [lives, setLives] = useState(3)

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

  return (
   <div className='page'>
    <NavBar />
    <div className='gamePage'>
      <div className='gameContainer'>
       
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

      </div>
    </div>
   </div>
  )
}

export default TileTheif
