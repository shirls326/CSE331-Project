import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';
import settingsIcon from '../assets/settingsGear.svg';
import LandingPage from "../pages/Landing/LandingPage.jsx";
import SettingsModal from "./SettingsModal.jsx"; // Fixed import
import InfoModal from "./InfoModal.jsx"; // Fixed import
import StopWatch from "./StopWatch.jsx"

const NavBar = () => {
  const navigate = useNavigate();

  const handleAllGamesClick = () => {
    navigate('/'); // Navigate to the root/landing page
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [showTimer, setShowTimer] = useState(false);


  return (
  
    <div className='navBar'>
      <div className='left'>
        <button className='allGamesButton' onClick={handleAllGamesClick}>
          All Games
        </button>
      </div>
      <div className='middle'>
        <div className='gameTitleLogo'>
          <h3>Theme Thief</h3>
        </div>
      </div>
      <div className='right'>
        <button 
          className='roundedButton' 
          onClick={() => 
            {
              console.log("Help button clicked")
              setIsHelpOpen(true)

            }}
        >
          ?
        </button>

        <button 
          className='roundedButton' 
          onClick={() => 
            {
              console.log("Setting buttons clicked")
              setIsSettingsOpen(true)
            }}
        >
          <img src={settingsIcon} alt="Settings" />
        </button>
        {showTimer && <StopWatch />}
        
      </div>

      {/* Render the modals conditionally */}
      {isHelpOpen && (
        <InfoModal 
          isOpen = {isHelpOpen}
          onClose={() => setIsHelpOpen(false)} // Pass a function to close the modal
        />
      )}
      {isSettingsOpen && (
        <SettingsModal 
          isOpen = {isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)} // Pass a function to close the modal
          showTimer={showTimer}
          setShowTimer={setShowTimer}
        />
      )}
      
    </div>
  );
};

export default NavBar;