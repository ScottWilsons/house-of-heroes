import React from "react";

//styling
import "./heroCard.sass";

function HeroCard({ heros, style }) {
  return (
    <>
      <div className="heroCard">
        <div className={style}>
          <div className="heroCard-front"></div>
          <div className="heroCard-back">
            <img className="card-image" src={heros.images.md} alt="card pic" />
            <p>Combat: {heros.powerstats.combat}</p>
            <p>Durability: {heros.powerstats.durability}</p>
            <p>Intelligence: {heros.powerstats.intelligence}</p>
            <p>Power: {heros.powerstats.power}</p>
            <p>Speed: {heros.powerstats.speed}</p>

            <p>Strength: {heros.powerstats.strength}</p>
            <h1 className="heroname">{heros.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
