import React from "react";
import "./sidebar.css";
import {motion} from "framer-motion"

const variants = {
  open: {
    transition: {
      straggerChildren: 0.05,
      straggerDirection: 100,
    },
  },
  closed: {
    transition: {
      straggerChildren: 0.05,
      straggerDirection: -99,
    },
  },
};

const itemvariants = {
  open: {
   y:-50,
  },
  closed: {
   y:50,
   opacity: 0.5,
  },
};

function Links() {
  const items = ["Homepage", "About", "Skills", "Project", "Contact"];

  return (
    <motion.div className="links">
      {items.map((item) => (
        <motion.a id="linksbut" href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.2}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
