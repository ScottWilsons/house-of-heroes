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
              <div className="heroCard-stats" id="heroCard-combat">
                <p className="heroCard-stat-nmb">{heros.powerstats.combat}</p>
              </div>
              <div className="heroCard-stats" id="heroCard-durability">
                <p className="heroCard-stat-nmb">
                  {heros.powerstats.durability}
                </p>
              </div>
              <div className="heroCard-stats" id="heroCard-intelligence">
                <p className="heroCard-stat-nmb">
                  {heros.powerstats.intelligence}
                </p>
              </div>
              <div className="heroCard-stats" id="heroCard-power">
                <p className="heroCard-stat-nmb">{heros.powerstats.power}</p>
              </div>
              <div className="heroCard-stats" id="heroCard-speed">
                <p className="heroCard-stat-nmb">{heros.powerstats.speed}</p>
              </div>
              <div className="heroCard-stats" id="heroCard-strength">
                <p className="heroCard-stat-nmb">{heros.powerstats.strength}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard
