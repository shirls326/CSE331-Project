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
  { text: "Cobalt", color: "yellow", group: 0, isOutlier: false },
  { text: "Azure", color: "yellow", group: 0, isOutlier: false },
  { text: "Crimson", color: "yellow", group: 0, isOutlier: true },
  { text: "Cyan", color: "yellow", group: 0, isOutlier: false },

  { text: "Penne", color: "cyan", group: 1, isOutlier: false },
  { text: "Rigatoni", color: "cyan", group: 1, isOutlier: false },
  { text: "Spagetti", color: "cyan", group: 1, isOutlier: true },
  { text: "Baugette", color: "cyan", group: 1, isOutlier: false },

  { text: "Peru", color: "pink", group: 2, isOutlier: false },
  { text: "Spain", color: "pink", group: 2, isOutlier: true },
  { text: "Brazil", color: "pink", group: 2, isOutlier: false },
  { text: "Ecuador", color: "pink", group: 2, isOutlier: false },

  { text: "Engine", color: "purple", group: 3, isOutlier: false },
  { text: "Tire", color: "purple", group: 3, isOutlier: false },
  { text: "Brakes", color: "purple", group: 3, isOutlier: false },
  { text: "Propeller", color: "purple", group: 3, isOutlier: true }
]

function TileTheif() {
  const [lives, setLives] = useState(3)
  const [selectedTiles, setSelectedTiles] = useState([])
  const [disabledTiles, setDisabledTiles] = useState([])

  // Reset game state: lives, selection, and disabled (removed) tiles.
  const resetGame = () => {
    setLives(3)
    setSelectedTiles([])
    setDisabledTiles([])
  }

  // Lose a life; if no lives remain, alert game over and reset everything.
  const loseLife = () => {
    if (lives <= 1) {
      alert("Game Over! Restarting...")
      resetGame()
    } else {
      setLives(lives - 1)
    }
  }

  // Handle tile click: select or deselect tiles; ignore clicks on disabled ones.
  const handleTileClick = (isOutlier, index) => {
    if (disabledTiles.includes(index)) {
      return
    }

    if (selectedTiles.includes(index)) {
      // Deselect the tile.
      setSelectedTiles(prev => prev.filter(i => i !== index))
    } else {
      // Add the tile to the selection; keep only the 3 most recent selections.
      setSelectedTiles(prev => {
        const updated = [...prev, index]
        if (updated.length > 3) {
          updated.shift()
        }
        return updated
      })
    }
  }

  // Submit handler:
  // If exactly 3 tiles are selected and they all belong to the same group
  // and none is an outlier, then disable (gray out) those tiles.
  // Afterwards, check if all non-outlier tiles are disabled to trigger a win.
  // Otherwise, deduct a life.
  const handleSubmit = () => {
    if (selectedTiles.length !== 3) {
      console.log("You must select exactly 3 tiles before submitting!")
      loseLife()
      return
    }

    const groups = selectedTiles.map(i => tilesData[i].group)
    const allSameGroup = groups.every(g => g === groups[0])
    const allNotOutlier = selectedTiles.every(i => !tilesData[i].isOutlier)

    if (allSameGroup && allNotOutlier) {
      // Successful submission: disable the selected tiles.
      const newDisabledTiles = [...disabledTiles, ...selectedTiles]
      setDisabledTiles(newDisabledTiles)
      setSelectedTiles([])

      // Check win condition:
      // If every non-outlier tile is now disabled, then only outlier tiles remain.
      const allNonOutlierDisabled = tilesData
        .map((tile, idx) => ({ tile, idx }))
        .filter(item => !item.tile.isOutlier)
        .every(item => newDisabledTiles.includes(item.idx))

      if (allNonOutlierDisabled) {
        alert("You Win!")
        resetGame()
      }
    } else {
      console.log("Selected tiles don't meet the required condition")
      loseLife()
    }
  }

  const handleWin = () => {
    alert("You Win!")
    resetGame()
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
              onClick={() => handleTileClick(tile.isOutlier, index)}
              isSelected={selectedTiles.includes(index)}
              isDisabled={disabledTiles.includes(index)}
            />
          ))}
        </div>
        <div className="button-lives-container">
          <button onClick={handleSubmit} className="allGamesButton">Submit</button>
          <h2 style={{ margin: 0 }}>Lives: {lives}</h2>
        </div>
        <Instructions />
      </div>
    </div>
  </div>
  )
}

export default TileTheif
