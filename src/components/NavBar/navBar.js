import React from "react"

//components
import Title from "./title"

//styling
import "./navstyle.sass"

function NavBar({ computerScore, playerScore }) {
  return (
    <div className="navBar">
      <div className="logo"></div>
      <div className="score-container">
        <p className="scores">Player Score: {playerScore}</p>
        <p className="scores">Computer Score: {computerScore}</p>
      </div>
      <Title />
    </div>
  )
}

export default NavBar
