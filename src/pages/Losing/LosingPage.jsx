import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "../App.css";
import "./LosingPage.css";
import NavBar from '../../components/navBar.jsx';

const LosingPage = () => {
  const navigate = useNavigate();

  const tryAgain = () => {
    navigate("/theme-thief");
  };

  return (
    <div className="page">
      <NavBar />
      <div className="gamePage">
        <div className="gameContainer">
          <div className="resultScreen">
            <h2 className="resultTitle">Theme Thief #192</h2>
            <h1 className="resultHeading">Not quite right!</h1>
            <div className="resultContent">
              <div className="stats-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="40" height="40" rx="8" fill="#FF69B4"/>
                  <rect x="30" y="30" width="40" height="40" rx="8" fill="#FF69B4"/>
                  <path d="M45 40 L 55 40 M 50 35 L 50 45" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="solve-time">
                <h3>Keep practicing!</h3>
                <p>You'll get it next time</p>
              </div>
            </div>
            <button 
              onClick={tryAgain} 
              className="try-again-button"
            >
              Try Again <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosingPage; 