import React from "react";
import '../Content/Content.css';
import Image from '../../Images/png-removebg-preview.png';
import Textarea from './textarea';
import {motion, transform} from "framer-motion";


const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 10,
    },
  },
};





function Content (){
    return <div id="content">
    <div className="Wrapper">
     <Textarea />
     </div>
     <motion.div className="slidingtext" variants={sliderVariants} animate="animate" initial="initial">
     Creator
     </motion.div>

       <div id="Images"><motion.img id="img" src={Image} /></div>
        
    </div>
}

export default Content;