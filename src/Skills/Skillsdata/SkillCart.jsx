import React from "react";
import './skillsdata.css';
import Skillslist from "./skillslist";

function Skillcart(props) {
    return <div id="Skillcart">
        <h2 id="skillcarthead">{props.name}</h2>
        <div>{props.svg}</div>
    </div>
}

export default Skillcart;