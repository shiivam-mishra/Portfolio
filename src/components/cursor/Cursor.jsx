import React, { useState, useEffect } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

const Cursor = () => {
  const [postion, setpostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setpostion({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      animate={{ x: postion.x + 10, y: postion.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;
