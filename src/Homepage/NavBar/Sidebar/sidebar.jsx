import * as React from "react";
import Togglebutton from "./togglebutton.jsx";
import { motion } from "framer-motion";
import Links from "./links.jsx";

import "./sidebar.css";

function Sidebar() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  const variants = {
    open: {
      clipPath: "circle(1220px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 60,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 60,
      },
    },
  };

  return (
    <motion.div className="Navbar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton onClick={handleClick} id="Navbut"/>
    </motion.div>
  );
}

export default Sidebar;
