import React from "react";
import ScrollImg from '../../Images/scroll.png';
import {motion} from "framer-motion";


const textVariants = {
   initial: {
    x: -500,
    opacity: 0,
   },
   animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
   },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      }
    },

};



function textarea() {
    return<motion.div 
    id="text-area" 
    variants={textVariants}
    initial="initial"
    animate="animate"
    >

    <motion.h1 id="text-h1" variants={textVariants}>Web Developer</motion.h1>


    <motion.div id="text-info" variants={textVariants}>
    <motion.div className="buttoms" variants={textVariants}>See the Latest Work</motion.div>
    <motion.div className="buttoms" variants={textVariants}>Contact Me</motion.div>
    </motion.div>

   <motion.img id="Scrolling" src={ScrollImg} variants={textVariants}
    animate="scrollButton"
   />
 </motion.div>
 
}


export default textarea;