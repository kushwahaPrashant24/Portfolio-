import React from "react";

import './ProjectData.css';
import Projectlist from "./Projectlist";
import Cards from "./Card"; 

function createCard(Card){
    return <section>
    <div className="container">
        <div className="wrapper">
    <Cards 
        key={Card.id}
        name={Card.name}
    />
    </div>
    </div>
    </section>
}


function Projectdata() {
    return <div id="Projectdata">

     {Projectlist.map(createCard)}</div>
}

export default Projectdata;