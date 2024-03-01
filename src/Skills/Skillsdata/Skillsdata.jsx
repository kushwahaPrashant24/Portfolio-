import React from "react";
import './skillsdata.css';
import Skillslist from "./skillslist";
import Skillcart from "./SkillCart";

function skillcard(card) {
    return <div>
           <Skillcart 
            key={card.id}
            name={card.name}
           />
    </div>
}

function Skillsdata() {
    return <div id="Skillsdata">
         {Skillslist.map(skillcard)}
    </div>
}

export default Skillsdata;