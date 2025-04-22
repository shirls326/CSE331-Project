import React from 'react';
import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose, showTimer, setShowTimer }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setShowTimer(e.target.checked);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Settings</h2>

        {/* Timer Toggle */}
        <div className="setting-group">
          <label htmlFor="showTimer">
            <input
              id="showTimer"
              type="checkbox"
              checked={showTimer}
              onChange={handleChange}
            />
            Show Timer
          </label>
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
