import React from "react";
import '../Content/Content.css';
import Image from '../../Images/png-removebg-preview.png';
import ScrollImg from '../../Images/scroll.png';





function Content (){
    return <div id="content">
    <div className="Wrapper">
     <div id="text-area">
        <h2>PRASHANT KUSHWAHA</h2>
        <h1>Web Devloper</h1>
        <div className="buttoms">See the Latest Work</div>
        <div className="buttoms">Contact Me</div>
       <img src={ScrollImg} />
     </div>
     </div>

       <div id="Images"><img src={Image}  /></div>
        
    </div>
}

export default Content;