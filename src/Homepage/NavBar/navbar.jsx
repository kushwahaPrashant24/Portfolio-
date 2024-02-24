import React from "react";
import Sidebar from "./Sidebar/sidebar";
import image1 from '../../Images/Linkedin.png';
import image2 from '../../Images/github1.png';
import image3 from '../../Images/gmail.png';
import './navbar.css';
import { motion } from "framer-motion"

function Navbar() {

    return <div id="homepage">
        
        <div className="title">
        <Sidebar />
            <motion.h2  
            id="Name"
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:1}}
            
            >PRASHANT KUSHWAHA</motion.h2>
            <motion.div 
             id="main-logo">
             <motion.img  whileHover={{
               scale: 1.4,
               transition: { duration: 0.3 },
               }} className="logo" src= {image1} />
             <motion.img  whileHover={{
               scale: 1.6,
               transition: { duration: 0.3 },
               }} className="logo" src= {image2} />
             <motion.img  whileHover={{
               scale: 1.6,
               transition: { duration: 0.3 },
               }} className="logo-email"  src= {image3} />
            </motion.div>
        </div>
    </div>
}

export default Navbar;