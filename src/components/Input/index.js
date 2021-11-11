import React from "react";
import "./style.css";

function Input({ placeholder, icon: Icon }) {
  return (
    <div id="containerInput">
      {Icon && <Icon size={20} color="#666360" />}
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
