import React from "react"

//components
import Title from "./title"

//styling
import "./navstyle.sass"

function NavBar({ computerScore, playerScore }) {
  return (
    <div className="navBar">
      <Title />
      <p>Player Score {playerScore}</p>
      <p>Computer Score {computerScore}</p>
    </div>
  )
}

export default NavBar
