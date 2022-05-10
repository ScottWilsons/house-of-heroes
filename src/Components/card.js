import React from "react";

function Card({ heros }) {
  console.log(heros);
  return (
    <div>
      <img src={heros.images.sm} alt={heros.name} />
      <h1>{heros.name}</h1>
    </div>
  );
}

export default Card;
