import React from "react"

//card component from Antd
import { Card, Image } from "antd"

//styling from Antd
import "antd/dist/antd.css"

function HeroCard({ heros }) {
  return (
    <>
      <Card title={heros.name} style={{ width: 300 }}>
        <Image src={heros.images.sm} width={200} />
        <p>Combat: {heros.powerstats.combat}</p>
        <p>Durability: {heros.powerstats.durability}</p>
        <p>Intelligence: {heros.powerstats.intelligence}</p>
        <p>Power: {heros.powerstats.power}</p>
        <p>Speed: {heros.powerstats.speed}</p>
        <p>Strength: {heros.powerstats.strength}</p>
      </Card>
    </>
  )
}

export default HeroCard
