import React from "react";
import Title from "./title";
import "./navstyle.sass";

function NavBar({ computerScore, playerScore }) {
  return (
    <div className="navBar">
      <Title />
      <p>Computer Score {computerScore}</p>
      <p>Player Score {playerScore}</p>
    </div>
  );
}

export default NavBar;
