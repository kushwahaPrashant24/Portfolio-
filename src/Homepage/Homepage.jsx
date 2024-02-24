import React from "react";
import '../Homepage/homepage.css';
import Navbar from "./NavBar/navbar";
import Content from "./Content/Content";



function Homepage (){
    return <div>
       <div id="home-Nav"><Navbar /></div> 
       <div id="home-cont"><Content /></div> 
    </div>
}

export default Homepage;