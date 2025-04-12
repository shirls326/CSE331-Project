import React from 'react'
import './navBar.css'
import settings from '../assets/settingsGear.svg'

export default function navBar() {
  return (
    <div className='navBar'>
      <div className='left'>
        <button className='allGamesButton'>All Games</button>

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
