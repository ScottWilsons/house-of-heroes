import React from "react"
import "./playerCard.sass"

export default function PlayerCard({ heros, disableButton, theBattle }) {
  return (
    <>
      <div className="playerCard">
        <img className="card-image" src={heros.images.md} alt="card pic" />
        <h1 className="player-heroname">{heros.name}</h1>
        <div className="playerCard-stats-cntr">
          <button disabled={disableButton} onClick={() => theBattle("combat")}>
            Combat: {heros.powerstats.combat}
          </button>
          <button
            disabled={disableButton}
            onClick={() => theBattle("durability")}
          >
            Durability: {heros.powerstats.durability}
          </button>
          <button
            disabled={disableButton}
            onClick={() => theBattle("intelligence")}
          >
            Intelligence: {heros.powerstats.intelligence}
          </button>
          <button disabled={disableButton} onClick={() => theBattle("power")}>
            Power: {heros.powerstats.power}
          </button>
          <button disabled={disableButton} onClick={() => theBattle("speed")}>
            Speed: {heros.powerstats.speed}
          </button>
          <button
            disabled={disableButton}
            onClick={() => theBattle("strength")}
          >
            Strength: {heros.powerstats.strength}
          </button>
        </div>
      </div>
    </>
  )
}
