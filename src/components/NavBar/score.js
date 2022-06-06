import React from "react";

//styling
import "./navstyle.sass";

function ScoreContainer({ computerScore, playerScore }) {
  return (
    <div className="score-container">
      <p className="scores">Player Score: {playerScore}</p>
      <p className="scores">Computer Score: {computerScore}</p>
    </div>
  );
}

export default ScoreContainer;
