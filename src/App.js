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

  return heros ? (
    <>
      <NavBar />
      <HeroCard heros={heros[randomNumber]} />
      <hr></hr>
      <HeroCard heros={heros[randomNumber2]} />
    </>
  ) : (
    <>
      <NavBar />
      <>Loading...</>
    </>
  );
}

export default App;
