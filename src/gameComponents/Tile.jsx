import React from 'react'
import './Tile.css'

export default function Tile({ tileText, setColor, onClick, isSelected, isDisabled }) {
  return (
    <div 
      className={`tile ${setColor} ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <p>{tileText}</p>
    </div>
  )
}
