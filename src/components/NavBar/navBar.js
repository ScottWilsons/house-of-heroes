import React from "react"

//components
import Title from "./title"
import ScoreContainer from "./score"

//styling
import "./navstyle.sass"

function NavBar({ computerScore, playerScore }) {
  return (
    <div className="navBar">
      <ScoreContainer computerScore={computerScore} playerScore={playerScore} />
      <Title />
    </div>
  )
}

export default NavBar
