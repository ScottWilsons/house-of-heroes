import React from "react"
import { useState, useEffect } from "react"

//components
import NavBar from "./components/NavBar/navBar"
import HeroCard from "./components/Card/HeroCard.js"
import PlayerCard from "./components/PlayerCard/playerCard"

//styling
import "./style.sass"

function App() {
  const [heros, setheros] = useState("")
  const [playerScore, setplayerScore] = useState(0)
  const [computerScore, setcomputerScore] = useState(0)
  const [playerCard, setPlayerCard] = useState()
  const [computerCard, setComputerCard] = useState()
  const [playButton, setPlayButton] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    async function FetchSuperHero() {
      const response = await fetch(
        `https://akabab.github.io/superhero-api/api/all.json`
      )
      const data = await response.json()
      setheros(data)
    }
    FetchSuperHero()
  }, [])

  function theBattle(selectedStat) {
    setDisableButton(true)
    if (
      playerCard.powerstats[selectedStat] ===
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Draw")
    } else if (
      playerCard.powerstats[selectedStat] <
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Lose")
      setcomputerScore(computerScore + 1)
    } else if (
      playerCard.powerstats[selectedStat] >
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Win")
      setplayerScore(playerScore + 1)
    }
  }

  function initRound() {
    setDisableButton(false)
    setPlayButton(true)
    let randomNumber = Math.floor(Math.random() * 564)
    let randomNumber2 = Math.floor(Math.random() * 564)
    const playerHero = heros[randomNumber]
    setPlayerCard(playerHero)
    const computerHero = heros[randomNumber2]
    setComputerCard(computerHero)
  }

  return heros ? (
    <>
      <div className="container">
        <NavBar playerScore={playerScore} computerScore={computerScore} />
        {computerCard ? <HeroCard heros={computerCard} /> : <></>}
        {playerCard ? (
          <PlayerCard
            heros={playerCard}
            disableButton={disableButton}
            theBattle={theBattle}
          />
        ) : (
          <></>
        )}
        <button onClick={() => initRound()}>
          {playButton ? "Play Again" : "Play"}
        </button>
      </div>
    </>
  ) : (
    <>
      <NavBar />
      <>Loading...</>
    </>
  )
}

export default App
