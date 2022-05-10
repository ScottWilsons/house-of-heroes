import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import { useState, useEffect } from "react";
import Card from "./Components/card";

function App() {
  const [heros, setheros] = useState("");

  useEffect(() => {
    FetchSuperHero();
  }, []);

  async function FetchSuperHero() {
    const response = await fetch(
      `https://akabab.github.io/superhero-api/api/all.json`
    );
    const data = await response.json();
    setheros(data);
  }

  let randomNumber = Math.floor(Math.random() * 563 + 1);
  console.log(randomNumber);
  console.log(heros[randomNumber]);

  return heros ? (
    <>
      <NavBar />
      <Card heros={heros[randomNumber]} />
    </>
  ) : (
    <>Loading...</>
  );
}

export default App;
