import React from "react";
import NavBar from "./components/NavBar/navBar";
import { useState, useEffect } from "react";
import HeroCard from "./components/Card/HeroCard.js";
import "./style.sass";
// let randomNumber = Math.floor(Math.random() * 564)
// let randomNumber2 = Math.floor(Math.random() * 564)

function App() {
  const [heros, setheros] = useState("");
  const [playerScore, setplayerScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);
  const [playerCard, setPlayerCard] = useState();
  const [computerCard, setComputerCard] = useState();
  const [playButton, setPlayButton] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    async function FetchSuperHero() {
      const response = await fetch(
        `https://akabab.github.io/superhero-api/api/all.json`
      );
      const data = await response.json();
      setheros(data);
    }
    FetchSuperHero();
  }, []);

  // const playerHero = heros[randomNumber]
  // const computerHero = heros[randomNumber2]

  function theBattle(selectedStat) {
    setDisableButton(true);
    if (
      playerCard.powerstats[selectedStat] ===
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Draw");
    } else if (
      playerCard.powerstats[selectedStat] <
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Lose");
      setcomputerScore(computerScore + 1);
    } else if (
      playerCard.powerstats[selectedStat] >
      computerCard.powerstats[selectedStat]
    ) {
      console.log("Win");
      setplayerScore(playerScore + 1);
    }
  }

  function initRound() {
    setDisableButton(false);
    setPlayButton(true);
    let randomNumber = Math.floor(Math.random() * 564);
    let randomNumber2 = Math.floor(Math.random() * 564);
    const playerHero = heros[randomNumber];
    setPlayerCard(playerHero);
    const computerHero = heros[randomNumber2];
    setComputerCard(computerHero);
  }

  return heros ? (
    <>
    <div className="container">
      <NavBar playerScore={playerScore} computerScore={computerScore} />
      <button className="combatButton" disabled={disableButton} onClick={() => theBattle("combat")}>
        Combat
      </button>
      <button disabled={disableButton} onClick={() => theBattle("durability")}>
        Durability
      </button>
      <button
        disabled={disableButton}
        onClick={() => theBattle("intelligence")}
      >
        Intelligence
      </button>
      <button disabled={disableButton} onClick={() => theBattle("power")}>
        Power
      </button>
      <button disabled={disableButton} onClick={() => theBattle("speed")}>
        Speed
      </button>
      <button disabled={disableButton} onClick={() => theBattle("strength")}>
        Strength
      </button>
      {computerCard ? <HeroCard heros={computerCard} /> : <></>}
      {playerCard ? <HeroCard heros={playerCard} /> : <></>}
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
  );
}

export default App;
