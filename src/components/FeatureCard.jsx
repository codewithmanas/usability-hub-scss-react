import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


const FeatureCard = ({ logo, title, description, childVariants }) => {
  return (
    <motion.div 
    variants={childVariants}
    transition={{ duration: 0.8 }}
    className="features__card flex">
      <img src={logo} alt="card sorting" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="secondary-button">
        Learn more <i className="fa-solid fa-right-long"></i>
      </a>
    </motion.div>
  );
};

export default FeatureCard;
