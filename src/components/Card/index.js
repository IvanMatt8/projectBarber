import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div className="card">{props.name}</div>
    </div>
  );
}

export default Card;
