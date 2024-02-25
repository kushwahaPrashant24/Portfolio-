import React from "react";
import { useRef } from "react";
import "./parallex.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ImagePlanet from "../Images/planets.png";
import ImageSun from "../Images/sun.png";

function Parallex({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [" start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      id="Parallex"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 id="Parallex-h1" style={{ y: yText }}>
        {" "}
        {type === "services" ? "what we do?" : "what we did?"}
      </motion.h1>
      <motion.div id="Mountains"></motion.div>

      <motion.div
        id="Planets"
        style={{
          y: yBg,
        }}
      ></motion.div>
      <motion.div id="Stars" style={{ x: yBg }}></motion.div>
    </div>
  );
}

export default Parallex;
