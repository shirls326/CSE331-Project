import React, { useEffect, useState } from 'react';
import './Stopwatch.css'; // optional, or rely fully on index.css

const Stopwatch = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const secsRemain = secs % 60;
    return `${mins}:${secsRemain.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      <span className="stopwatch-icon">⏱️</span>
      <span className="stopwatch-time">{formatTime(secondsPassed)}</span>
    </div>
  );
};

export default Stopwatch;
