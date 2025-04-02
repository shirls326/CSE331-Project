import React, { useState } from 'react'
import './instructions.css'

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false) // Track visibility

  return (
    <div className='instructionsContainer'>
        <button 
            className='collapsable' 
            onClick={() => setIsOpen(!isOpen)}
        >
            <h2>How to play</h2>
        </button>
        {isOpen && (
            <div className='instructionsContent'>
                <h2>Instructions</h2>
                <p>1. Click on the tiles to select them.</p>
                <p>2. Avoid selecting the outlier tiles.</p>
                <p>3. You have 3 lives. Lose a life for each incorrect selection.</p>
                <p>4. Win by selecting all non-outlier tiles.</p>
                <p>5. Good luck!</p>
            </div>
        )}
    </div>
  )
}
