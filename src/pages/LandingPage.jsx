import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

// Import all game images
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'
import game5 from '../assets/game5.png'
import game6 from '../assets/game6.png'

// Create an image mapping object
const gameImages = {
  1: game1,
  2: game2,
  3: game3,
  4: game4,
  5: game5,
  6: game6
}

const LandingPage = () => {
  const navigate = useNavigate()

  const handlePlayGame = (gameId) => {
    navigate(`/game/${gameId}`)
  }

  return (
    <div className="landing-page">
      <h1>Welcome to Game Hub</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={gameImages[game.id]} alt={game.title} />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <button onClick={() => handlePlayGame(game.id)}>Play Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingPage 