import React from "react";
import "./skillsdata.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Skillsdata() {


  const variants = {
    initial: {
      y:80,
      opacity: 0,
    },
    animate: {
       
      y: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildern: 1,
      },
    },
  };

  const variantsONE = {
    initial: {
      y:80,
      opacity: 0,
    },
    animate: {
      x: 1,  
      y: 1,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildern: 0.1,
      },
    },
  };

  return (
    <div id="Skillsdata" >
      <motion.div className="skillpath" variants={variantsONE}
            initial="initial"
            whileInView="animate">
        <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            C
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            HTML
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            CSS
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            SCSS
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            BOOTSTRAP
          </h2>
      </motion.div>
     </motion.div>

     <motion.div className="skillpath"
     variants={variantsONE}
            initial="initial"
            whileInView="animate"
     >
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            TAILWIND
          </h2>
      </motion.div>

        <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            JAVASCRIPT
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            JQUERY
          </h2>
      </motion.div>
      <motion.div className="skillcircle" 
        variants={variants}
            initial="initial"
            whileInView="animate"
        >
          <h2
          >
            REACT
          </h2>
      </motion.div>
     
     </motion.div>
    </div>
  );
}

export default Skillsdata;
