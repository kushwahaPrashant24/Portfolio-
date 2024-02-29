import React from "react";
import './ProjectData.css';
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";



function Cards(props){

const ref = useRef();

const { scrollYProgress } = useScroll({
    target: ref,
});

const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return <div className="container">
         <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={props.img} alt="img"/ >
            </div>
            <motion.div className="Textcontainer" style={{y}}>
            <h1 className="propsh1">{props.name}</h1>
           <p className="propsp">{props.about}</p>
               <div className="boo">
                 <div className="but">
                 <a href={props.hostedlink} target="main">Hosted link</a>
                 </div>
                 <div className="but">
                 <a href={props.sourcecode} target="main">Source Code</a>
                 </div>
                </div>
            </motion.div>
            
         </div>
        <div>
       
         </div>  
         </div>
              

}

export default Cards;