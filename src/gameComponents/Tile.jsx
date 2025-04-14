import React from 'react'

import './Tile.css'
export default function Tile({ tileText, setColor, onClick, isSelected }) {

    // setTile is a function that takes a tile and sets it to the current tile
  


    // tileText is the text that will be displayed on the tile

    // setColor is a function that takes a color and sets it to the current tile

    // isSelected is a boolean that indicates if the tile is selected



  return (
    <div 
      className={`tile ${setColor} ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
        <p>{tileText}</p>
    </div>
  )
}
