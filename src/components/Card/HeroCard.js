import React from "react";
import "./heroCard.sass";

function HeroCard({ heros }) {
  return (
    <>
      <div className="heroCard-container">
        <div >{heros.name}</div>
        <img className="card-image" src={heros.images.md} alt="card pic" />
        <p>Combat: {heros.powerstats.combat}</p>
        <p>Durability: {heros.powerstats.durability}</p>
        <p>Intelligence: {heros.powerstats.intelligence}</p>
        <p>Power: {heros.powerstats.power}</p>
        <p>Speed: {heros.powerstats.speed}</p>
        <p>Strength: {heros.powerstats.strength}</p>
        {/* <div className=".back"></div> */}
      </div>
    </>
  );
}

export default HeroCard;
