import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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
      <div id="contactArea">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={6} placeholder="Massage" />
          <button>Submit </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
