import React from "react";
import '../Content/Content.css';
import Image from '../../Images/png-removebg-preview.png';
import Textarea from './textarea';





function Content (){
    return <div id="content">
    <div className="Wrapper">
     <Textarea />
     </div>

       <div id="Images"><img src={Image}  /></div>
        
    </div>
}

export default Content;