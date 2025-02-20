import "./sidebar.scss";
import { motion } from "framer-motion";
import Links from "./links/Links.jsx";
import ToggleButoon from "./toggleButton/ToggleButoon.jsx";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        // restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButoon setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
