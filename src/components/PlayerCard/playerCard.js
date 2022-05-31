import React from "react";
import "./playerCard.sass";

export default function PlayerCard({ heros, disableButton, theBattle }) {
  return (
    <>
      <div className="playerCard">
        <div className="playerCard-inner">
          <div className="playerCard-back">
            <img
              className="plyrCard-image"
              src={heros.images.md}
              alt="card pic"
            />
            <h1 className="player-heroname">{heros.name}</h1>
            <div className="playerCard-stats-cntr">
              <div className="tooltip">
                <button
                  className="player-button"
                  id="playerCard-combat"
                  disabled={disableButton}
                  onClick={() => theBattle("combat")}
                >
                  {heros.powerstats.combat}

                  <span className="tooltiptext">Combat</span>
                </button>
              </div>
              <div className="tooltip">
              <button
                className="player-button"
                id="playerCard-durability"
                disabled={disableButton}
                onClick={() => theBattle("durability")}
              >
                {heros.powerstats.durability}
                <span className="tooltiptext">Durability</span>
              </button>
              </div>
              <div className="tooltip">
              <button
                className="player-button"
                id="playerCard-intelligence"
                disabled={disableButton}
                onClick={() => theBattle("intelligence")}
              >
                {heros.powerstats.intelligence}
                <span className="tooltiptext">Intelligence</span>
              </button>
              </div>
              <div className="tooltip">
              <button
                className="player-button"
                id="playerCard-power"
                disabled={disableButton}
                onClick={() => theBattle("power")}
              >
                {heros.powerstats.power}
                <span className="tooltiptext">Power</span>
              </button>
              </div>
              <div className="tooltip">
              <button
                className="player-button"
                id="playerCard-speed"
                disabled={disableButton}
                onClick={() => theBattle("speed")}
              >
                {heros.powerstats.speed}
                <span className="tooltiptext">Speed</span>
              </button>
              </div>
              <div className="tooltip">
              <button
                className="player-button"
                id="playerCard-strength"
                disabled={disableButton}
                onClick={() => theBattle("strength")}
              >
                {heros.powerstats.strength}
                <span className="tooltiptext">Strength</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
