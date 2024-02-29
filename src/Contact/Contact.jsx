import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import ContactArea from "./ContactArea";

const variants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

function Contact() {



  return (
    <motion.div 
    id="Contact" 
    variants={variants} 
    initial="initial"
     whileInView="animate">
      <motion.div id="contactText" variants={variants}>
        
          <motion.h1 id="Contacthead" variants={variants}>
            Let's Work<br></br>togrther
          </motion.h1>
       
        <motion.div id="Contactdata" variants={variants}>
          <h1>Mail</h1>
          <span>prashantkush24@gmail.com</span>
        </motion.div>
        <motion.div id="Contactdata" variants={variants}>
          <h1>Address</h1>
          <span>
            RGS Nagar Boys Hostel,<br></br> Avantika extension, Ghaziabad
          </span>
        </motion.div>
        <motion.div id="Contactdata" variants={variants}>
          <h1>Phone</h1>
          <span>+91 9795243902</span>
        </motion.div>
      </motion.div>
      <ContactArea />
    </motion.div>
  );
}

export default Contact;
