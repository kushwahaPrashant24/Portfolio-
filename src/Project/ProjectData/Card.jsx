import React from "react";


function Cards(props){
    return <div id="Cards">

        <div>
         <h1>{props.name}</h1>
         <img src={props.img}/>
         <p>{props.about}</p>
         </div>       
    </div>
}

export default Cards;