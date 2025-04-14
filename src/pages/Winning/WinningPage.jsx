import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "../App.css";
import "./WinningPage.css";
import NavBar from '../../components/navBar.jsx';
import Trophy from '../../assets/photos/trophy.png';

const WinningPage = () => {
  const navigate = useNavigate();

  const shareScore = () => {
    alert("Your score has been shared!");
  };

  const playAgain = () => {
    navigate("/theme-thief");
  };

  return (
    <div className="page">
      <NavBar />
      <div className="gamePage">
        <div className="gameContainer">
          <div className="resultScreen">
            <h2 className="resultTitle">Theme Thief #192</h2>
            <h1 className="resultHeading">You're crushing it!</h1>
            <div className="resultContent">
              <div className="stats-icon">
                <img src={Trophy} alt="Trophy" className="resultIcon" />
              </div>
              <div className="solve-time">
                <h3>Solved in 0:45</h3>
                <p>Today's Average: 1:02</p>
              </div>
            </div>
            <button 
              onClick={shareScore} 
              className="share-button"
            >
              Share your score <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningPage;