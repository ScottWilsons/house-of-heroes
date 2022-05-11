import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/navBar"
import { useState, useEffect } from "react"
import HeroCard from "./components/Card/HeroCard.js"

// let randomNumber = Math.floor(Math.random() * 564)
// let randomNumber2 = Math.floor(Math.random() * 564)

function App() {
  const [heros, setheros] = useState("")
  const [playerScore, setplayerScore] = useState(0)
  const [computerScore, setcomputerScore] = useState(0)
  const [playerCard, setPlayerCard] = useState()
  const [computerCard, setComputerCard] = useState()
  const [playButton, setPlayButton] = useState(false)

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

  // const playerHero = heros[randomNumber]
  // const computerHero = heros[randomNumber2]

  function theBattle(selectedStat) {
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
      <NavBar playerScore={playerScore} computerScore={computerScore} />
      <button onClick={() => theBattle("combat")}>Combat</button>
      <button onClick={() => theBattle("durability")}>Durability</button>
      <button onClick={() => theBattle("intelligence")}>Intelligence</button>
      <button onClick={() => theBattle("power")}>Power</button>
      <button onClick={() => theBattle("speed")}>Speed</button>
      <button onClick={() => theBattle("strength")}>Strength</button>
      {computerCard ? <HeroCard heros={computerCard} /> : <></>}
      {playerCard ? <HeroCard heros={playerCard} /> : <></>}
      <button onClick={() => initRound()}>
        {playButton ? "Play Again" : "Play"}
      </button>
    </>
  ) : (
    <>
      <NavBar />
      <>Loading...</>
    </>
  )
}

export default App
