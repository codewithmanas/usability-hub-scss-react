import React from "react";
import HeaderLogo from "../assets/asset_2.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Header = () => {

  // Parent animation (controls stagger timing)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3, // delay between children
    },
  },
};

// Each child's animation
const childVariants = {
  hidden: { opacity:0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};


  return (
    <header className="header">
      <div className="container flex header__section">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        className="header__left">
          <motion.h1 variants={childVariants} transition={{ duration: 0.8 }}>Design confidently.</motion.h1>
          <motion.p variants={childVariants} transition={{ duration: 0.8 }}>
            UsabilityHub is a remote user research platform that takes the
            guesswork out of design decisions by validating them with real
            users.
          </motion.p>
          <motion.a variants={childVariants} transition={{ duration: 0.8 }} href="#" className="primary-button header__cta">
            Get started
          </motion.a>
        </motion.div>
        <div className="header__right">
          <img src={HeaderLogo} alt="header logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
