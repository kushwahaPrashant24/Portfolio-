import React from "react";

import './ProjectData.css';
import Projectlist from "./Projectlist";
import Cards from "./Card"; 

function createCard(Card){
    return <section>
    
    <Cards 
        key={Card.id}
        name={Card.name}
        img={Card.img}
        about={Card.about}
        hostedlink={Card.hostedlink}
        sourcecode={Card.sourcecode}
        
    />
   
    </section>
}


function Projectdata() {
    return <div id="Projectdata">

     {Projectlist.map(createCard)}</div>
}

export default Projectdata;