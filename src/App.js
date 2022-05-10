import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import { useState, useEffect } from "react";
import HeroCard from "./components/Card/HeroCard.js";

let randomNumber = Math.floor(Math.random() * 564);
let randomNumber2 = Math.floor(Math.random() * 564);
console.log(randomNumber);

function App() {
  const [heros, setheros] = useState("");
  // const [stat, setstat] = useState();

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

  const playerHero = heros[randomNumber];
  const computerHero = heros[randomNumber2];

  function theBattle(selectedStat) {
    // setstat(selectedStat);

    if (
      playerHero.powerstats[selectedStat] ===
      computerHero.powerstats[selectedStat]
    ) {
      console.log("Draw");
    } else if (
      playerHero.powerstats[selectedStat] <
      computerHero.powerstats[selectedStat]
    ) {
      console.log("Lose");
    } else if (
      playerHero.powerstats[selectedStat] >
      computerHero.powerstats[selectedStat]
    ) {
      console.log("Win");
    }
  }

  return heros ? (
    <>
      <NavBar />
      <button onClick={() => theBattle("combat")}>Combat</button>
      <button onClick={() => theBattle("durability")}>Durability</button>
      <button onClick={() => theBattle("intelligence")}>Intelligence</button>
      <button onClick={() => theBattle("power")}>Power</button>
      <button onClick={() => theBattle("speed")}>Speed</button>
      <button onClick={() => theBattle("strength")}>Strength</button>
      <HeroCard heros={computerHero} />
      <HeroCard heros={playerHero} />
    </>
  ) : (
    <>
      <NavBar />
      <>Loading...</>
    </>
  );
}

export default App;
