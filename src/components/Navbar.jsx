import React from "react";
import Logo from "../assets/asset_1.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex nav__container">
        <a href="#" className="company-logo">
          <img src={Logo} alt="company logo" />
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li>
              <a href="#" className="hover-link">
                Products
              </a>
            </li>
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
      </div>
    </nav>
  );
};

export default Navbar;
