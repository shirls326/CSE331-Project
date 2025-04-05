import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './instructions.css'

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='instructionsContainer' onClick={() => setIsOpen(!isOpen)}>
      <div className="instructionsHeader">
        <h2>How to play/Instructions</h2>
        <FaChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className='instructionsContent'>
          <hr />
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
