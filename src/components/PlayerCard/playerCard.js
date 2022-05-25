import React from "react";
import "./playerCard.sass";

export default function PlayerCard({ heros, disableButton, theBattle }) {
  return (
    <>
      <div className="playerCard">
        <img className="card-image" src={heros.images.md} alt="card pic" />
        <h1 className="player-heroname">{heros.name}</h1>
        <div className="playerCard-stats-cntr">
          <button
            className="player-button"
            id="playerCard-combat"
            disabled={disableButton}
            onClick={() => theBattle("combat")}
          >
            {heros.powerstats.combat}
          </button>
          <button
            className="player-button"
            id="playerCard-durability"
            disabled={disableButton}
            onClick={() => theBattle("durability")}
          >
            {heros.powerstats.durability}
          </button>
          <button
            className="player-button"
            id="playerCard-intelligence"
            disabled={disableButton}
            onClick={() => theBattle("intelligence")}
          >
            {heros.powerstats.intelligence}
          </button>
          <button
            className="player-button"
            id="playerCard-power"
            disabled={disableButton}
            onClick={() => theBattle("power")}
          >
            {heros.powerstats.power}
          </button>
          <button
            className="player-button"
            id="playerCard-speed"
            disabled={disableButton}
            onClick={() => theBattle("speed")}
          >
            {heros.powerstats.speed}
          </button>
          <button
            className="player-button"
            id="playerCard-strength"
            disabled={disableButton}
            onClick={() => theBattle("strength")}
          >
            {heros.powerstats.strength}
          </button>
        </div>
      </div>
    </>
  );
}
