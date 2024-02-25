import React from "react";
import "./parallex.css";

function Parallex({ type }) {
  return (
    <div id="Parallex">
      <h1 id="Parallex-h1"> {type === "services" ? "what we do?" : "what we did?"}</h1>
      <div id="Mountains"></div>
      <div id="Planets"></div>
      <div id="Stars"></div>
    </div>
  );
}

export default Parallex;
