import React from "react"

//styling
import "./heroCard.sass"

function HeroCard({ heros, style }) {
  return (
    <>
      <div className="heroCard">
        <div className={style}>
          <div className="heroCard-front"></div>

          <div className="heroCard-back">
            <img
              className="heroCard-image"
              src={heros.images.md}
              alt="card pic"
            />
            <h1 className="heroname">{heros.name}</h1>
            <div className="heroCard-stats-cntr">
              <div className="heroCard-stat-nmb" id="heroCard-combat">
                {heros.powerstats.combat}
              </div>

              <div className="heroCard-stat-nmb" id="heroCard-durability">
                {heros.powerstats.durability}
              </div>

              <div className="heroCard-stat-nmb" id="heroCard-intelligence">
                {heros.powerstats.intelligence}
              </div>

              <div className="heroCard-stat-nmb" id="heroCard-power">
                {heros.powerstats.power}
              </div>

              <div className="heroCard-stat-nmb" id="heroCard-speed">
                {heros.powerstats.speed}
              </div>

              <div className="heroCard-stat-nmb" id="heroCard-strength">
                {heros.powerstats.strength}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard
