import React from "react";
import Logo from "../assets/asset_1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <nav className="nav">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className="container flex nav__container">
        <a href="#" className="nav__company-logo">
          <img src={Logo} alt="company logo" />
        </a>
        <div className="nav__links">
          <ul className="flex">
            <motion.li whileHover={{ scale: 1.1, transition: { duration: 0.5 }}}>
              <a href="#" className="hover-link">
                Products
              </a>
            </motion.li>
            <li>
              <a href="#" className="hover-link">
                Customer
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover-link secondary-button">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="hover-link primary-button">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
