import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navBar.css'
import settings from '../assets/settingsGear.svg'
import LandingPage from "../pages/Landing/LandingPage"

const NavBar = () => {
  const navigate = useNavigate();

  const handleAllGamesClick = () => {
    navigate('/');  // Navigate to the root/landing page
  };

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
        <button className='roundedButton'>?</button>
        <button className='roundedButton'><img src = {settings}/></button>

      </div>
     
    
      

    </div>
  )
}

export default NavBar