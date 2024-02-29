import React from "react";
import './Project.css'
import { useRef } from "react";
import Projectdata from "./ProjectData/ProjectData";
import {motion ,  useScroll ,useSpring} from "framer-motion"

function Project() {
   
    const ref = useRef();

    const {scrollYprocess } = useScroll({
        target:  ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYprocess, {
        stiffness: 100,
        damping: 30,
    });

    return <div id="Project" ref={ref}>
          <div id="Process">
            <h1 id="Projectheading">Featured Work</h1>
            <motion.div style={{scaleX}} id="Processbar"></motion.div>
          </div>
        <Projectdata />
     </div>
}

export default Project;