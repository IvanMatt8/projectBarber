import React from "react";
import "./style.css";

function Card({ name, img }) {
  return (
    <>
      <div className="card">
        <img src={img} alt={name} />
        <div>{name} </div>
      </div>
    </>
  );
}
export default Card;
