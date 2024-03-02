import React from "react";
import './skills.css';
import Skillsdata from "./Skillsdata/Skillsdata";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


function Skills() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return  <div id="Skills" ref={ref}>
           <motion.h1 id="Skillshead" style={{y}}>Skills</motion.h1>
           <motion.div id="stylecarddata" style={{y}}><Skillsdata /></motion.div>
    </div>
}

export default Skills;