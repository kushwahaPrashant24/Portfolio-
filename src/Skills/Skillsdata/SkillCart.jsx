import React from "react";
import './skillsdata.css';
import Skillslist from "./skillslist";

function Skillcart(props) {
    return <li>
        <h2 id="skillcarthead">{props.name}</h2>
        </li>
    
}

export default Skillcart;