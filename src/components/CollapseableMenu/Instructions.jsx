import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './instructions.css'

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='instructionsContainer'>
      <div className="instructionsHeader" onClick={() => setIsOpen(!isOpen)}>
        <h2 style={{ margin: 0 }}>How to play/Instructions</h2>
        <FaChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <p className='instructionsContent'>
          <hr />
          1. Click on the tiles to select them.<br/>
          2. Avoid selecting the outlier tiles.<br/>
          3. You have 3 lives. Lose a life for each incorrect selection.<br/>
          4. Win by selecting all non-outlier tiles.<br/>
          5. Good luck!
        </p>
      )}
    </div>
  )
}
