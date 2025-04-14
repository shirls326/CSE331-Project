import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const [selectedTiles, setSelectedTiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  // Handle tile selection
  const handleTileClick = (index, isOutlier) => {
    if (submitted) return; // Don't allow selection after submission
    
    // Check if tile is already selected
    if (selectedTiles.includes(index)) {
      // Deselect the tile
      setSelectedTiles(selectedTiles.filter(i => i !== index));
    } else if (selectedTiles.length < 4) {
      // Select the tile if we haven't reached 4 selections
      setSelectedTiles([...selectedTiles, index]);
    }
  }

  // Handle submission
  const handleSubmit = () => {
    if (selectedTiles.length !== 4) {
      alert("Please select exactly 4 tiles before submitting!");
      return;
    }
    
    setSubmitted(true);
    
    // Check if all selected tiles are outliers
    const allCorrect = selectedTiles.every(index => tilesData[index].isOutlier);
    
    if (allCorrect) {
      // Navigate to winning page
      setTimeout(() => {
        navigate('/win');
      }, 1000);
    } else {
      // Navigate to losing page
      setTimeout(() => {
        navigate('/lose');
      }, 1000);
    }
  }

  // Reset the game
  const resetGame = () => {
    setSelectedTiles([]);
    setSubmitted(false);
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
              isSelected={selectedTiles.includes(index)}
              onClick={() => handleTileClick(index, tile.isOutlier)}
            />
          ))}
        </div>
        
        <div className="game-controls">
          <h2>Selected: {selectedTiles.length}/4</h2>
          <h2>Lives: {lives}</h2>
          
          <div className="button-container">
            <button 
              className="submit-button" 
              onClick={handleSubmit}
              disabled={selectedTiles.length !== 4 || submitted}
            >
              Submit
            </button>
            <button 
              className="reset-button" 
              onClick={resetGame}
              disabled={!submitted}
            >
              Reset
            </button>
          </div>
        </div>
        
        <Instructions />
      </div>
    </div>
   </div>
  )
}

export default TileTheif
