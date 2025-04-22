import React from 'react';
import './InfoModal.css';

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>About Theme Thief</h2>
        <div className="modal-body">
          <p>
            Theme Thief is a pattern recognition and correlation game used by companies like JP Morgan, Unilever, and Deloitte
            to evaluate candidates' abilities in:
          </p>
          <ul>
            <li>Pattern Recognition</li>
            <li>Logical Correlation</li>
            <li>Problem Solving</li>
            <li>Visual Analysis</li>
            <li>Strategic Thinking</li>
          </ul>
          <p>
            The game challenges players to identify patterns and relationships between different elements,
            testing their ability to recognize correlations and make logical connections - skills highly
            valued in quantitative trading and data analysis roles.
          </p>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InfoModal; 