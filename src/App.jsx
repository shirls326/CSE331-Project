import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import LandingPage from './pages/Landing/LandingPage';
import TileThief from './pages/TileThief/TileThief';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tile-thief" element={<TileThief />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 