import React from 'react'
import './navBar.css'
import settings from '../assets/settingsGear.svg'

export default function navBar() {
  return (
    <div className='navBar'>
      <button>All Games</button>
      <div className='gameTitleLogo'>
        <h3>Theme Thief</h3>
      </div>
      <button className='roundedButton'>?</button>
      <button className='roundedButton'><img src = {settings}/></button>

    </div>
  )
}
