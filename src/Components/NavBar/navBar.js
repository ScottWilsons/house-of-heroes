import React from "react";
import Title from "./title";

function NavBar({ computerScore, playerScore }) {
  return (
    <div>
      <Title />
      <p>Computer Score {computerScore}</p>
      <p>Player Score {playerScore}</p>
    </div>
  );
}

export default NavBar;
