import React from "react"
import { useState, useEffect } from "react"

//components
import NavBar from "./components/NavBar/navBar"
import HeroCard from "./components/Card/heroCard"
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
  const [playDisabled, setPlayDisabled] = useState(false)
  const [style, setStyle] = useState("heroCard-transform")

  const changeStyle = () => {
    // console.log(style)
    if (style === "heroCard-transform") {
      setStyle("heroCard-inner")
    } else {
      setStyle("heroCard-transform")
    }
  }

  useEffect(() => {
    async function FetchSuperHero() {
      const response = await fetch(
        `https://akabab.github.io/superhero-api/api/all.json`
      )
      const data = await response.json()
      // let module = require("./data.js")
      // let data = module.data
      // console.log(data)
      setheros(data)
    }
    FetchSuperHero()
  }, [])

  function theBattle(selectedStat) {
    changeStyle()
    setDisableButton(true)
    setPlayDisabled(false)
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
    changeStyle()
    setDisableButton(false)
    setPlayDisabled(true)
    let randomNumber = Math.floor(Math.random() * 564)
    let randomNumber2 = Math.floor(Math.random() * 564)
    const playerHero = heros[randomNumber]
    setPlayerCard(playerHero)
    const computerHero = heros[randomNumber2]
    //check play button to see if first round, first round delay not required, second round timeout required to keep next card information hidden
    playButton
      ? setTimeout(() => {
          setComputerCard(computerHero)
        }, 1000)
      : setComputerCard(computerHero)
    // console.log(computerHero)
    setPlayButton(true)
  }

  return heros ? (
    <>
      <NavBar playerScore={playerScore} computerScore={computerScore} />
      <div className="container">
        <div className="cardContainer">
          {playerCard ? (
            <PlayerCard
              heros={playerCard}
              disableButton={disableButton}
              theBattle={theBattle}
            />
          ) : (
            <></>
          )}
          <button
            className="battleButton"
            disabled={playDisabled}
            onClick={() => initRound()}
          >
            {playButton ? "Play Again" : "Play"}
          </button>
          {computerCard ? (
            <HeroCard heros={computerCard} style={style} />
          ) : (
            <></>
          )}
        </div>
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
