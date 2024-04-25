import React from "react";
import './Aboutme.css';
import Abouttwo from "./About component/Abouttwo/Abouttwo";
import Aboutone from "./About component/Aboutone/Aboutone";

function About () {
    return <div id="about">
       <div  id="aboutOne"><Aboutone /></div>
       <div id="aboutTwo"> <Abouttwo /></div>
   
    </div>
}

export default About;