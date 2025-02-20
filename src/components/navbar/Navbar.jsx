import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/shiivam-kumar-mishra-4867a5218"
            target=" _blank"
          >
            <img src="/linkedin.png" alt="linke" />
          </a>
          <a href="#">
            <img src="/github.png" alt="git" />
          </a>
          {/* <a href="#"><img src="/public/linkedin-icon.webp" alt="" /></a> */}
          {/* <a href="#"><img src="/public/linkedin-icon.webp" alt="" /></a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
