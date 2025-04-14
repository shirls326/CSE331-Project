import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import './LandingPage.css';
import NavBar from '../../components/navBar.jsx'

// Import images directly
import outlierImage from '../../assets/photos/outthelier.jpeg';
import patternRecognition from '../../assets/photos/patternrecognition.jpeg';
import themeThief from '../../assets/photos/themethief.jpeg';
import memoryGames from '../../assets/photos/memorygames.jpeg';

// Create an image mapping object
const gameImages = {
  'outthelier': outlierImage,
  'patternrecognition': patternRecognition,
  'themethief': themeThief,
  'memorygames': memoryGames
};

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Sample game data - you can replace this with your actual games
  const games = [
    { id: 1, title: 'Spot the Outlier', description: 'Solve complex logical challenges to spot the odd out', imageKey: 'outthelier' },
    { id: 2, title: 'Pattern Recognition', description: 'Identify the next pattern in the sequence', imageKey: 'patternrecognition' },
    { id: 3, title: 'Theme Thief', description: 'Find the odd one out in each group', imageKey: 'themethief' },
    { id: 4, title: 'Memory Games', description: 'Test your memory and concentration', imageKey: 'memorygames' },
  ];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayGame = (gameId) => {
    // Navigate to the appropriate game page based on game ID
    if (gameId === 3) {
      // Theme Thief game
      navigate('/theme-thief');
    } else {
      // Default game page
      navigate('/game');
    }
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Crash that Interview</h1>
        <p className="catchphrase">Prepare you interview in a fun way!</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
      </div>

      <div className="games-grid">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-image">
              {game.imageKey && gameImages[game.imageKey] ? (
                <img src={gameImages[game.imageKey]} alt={game.title} className="game-img" />
              ) : (
                <div className="placeholder-image"></div>
              )}
            </div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <button 
              className="play-button"
              onClick={() => handlePlayGame(game.id)}
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 