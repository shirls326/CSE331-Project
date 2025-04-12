import React from "react";

const WinningPage = () => {
  const shareScore = () => {
    alert("Your score has been shared!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-teal-400 text-white text-center p-8 rounded-2xl shadow-lg max-w-sm">
        <h2 className="text-lg font-semibold"> Theme Thief #192</h2>
        <h1 className="text-3xl font-bold mt-2">You're Crushing It!</h1>
        <div className="bg-white text-red-500 font-bold p-4 rounded-lg mt-4 shadow">
          <p>Top 95% of the players</p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gold_medal_icon.svg/512px-Gold_medal_icon.svg.png" 
            alt="Trophy" 
            className="w-12 mx-auto mt-2"
          />
        </div>
        <button 
          onClick={shareScore} 
          className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-full shadow hover:bg-pink-600 transition"
        >
          Share your score 🚀
        </button>
      </div>
    </div>
  );
};

export default WinningPage;
