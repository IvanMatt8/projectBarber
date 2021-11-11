import React from "react";
import "./style.css";

function Button({ text }) {
  return (
    <div id="containerButton">
      <button className="button">{text}</button>
    </div>
  );
}

export default Button;
