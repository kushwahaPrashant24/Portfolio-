import React from "react";
import ScrollImg from '../../Images/scroll.png';

function textarea() {
    return<div id="text-area">
    <h2 id="text-h2">PRASHANT KUSHWAHA</h2>
    <h1 id="text-h1">Web Developer</h1>


    <div id="text-info">
    <div className="buttoms">See the Latest Work</div>
    <div className="buttoms">Contact Me</div>
    </div>

   <img id="Scrolling" src={ScrollImg} />
 </div>
 
}


export default textarea;