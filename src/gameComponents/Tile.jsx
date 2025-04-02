import React from 'react'

import './Tile.css'
export default function Tile({ tileText, setColor }) {

    // setTile is a function that takes a tile and sets it to the current tile
  


    // tileText is the text that will be displayed on the tile

    // setColor is a function that takes a color and sets it to the current tile



  return (
    <div className={`tile ${setColor}`}>
        <p>{tileText}</p>
    </div>
  )
}
