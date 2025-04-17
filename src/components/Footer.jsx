import React from "react";
import CompanyLogo from "../assets/asset_27.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex footer__container">
        <a href="#" className="company__logo">
          <img src={CompanyLogo} alt="company logo" />
        </a>
        <div className="link__column flex">
          <h4>Product</h4>
          <a href="#" className="hover-link">
            Overview
          </a>
          <a href="#" className="hover-link">
            Pricing
          </a>
          <a href="#" className="hover-link">
            UsabilityHub panel
          </a>
          <a href="#" className="hover-link">
            Customers
          </a>
          <a href="#" className="hover-link">
            Status page
          </a>
          <a href="#" className="hover-link">
            Sign up
          </a>
          <a href="#" className="hover-link">
            Book a demo
          </a>
        </div>
        <div className="link__column flex">
          <h4>Methodologies</h4>
          <a href="#" className="hover-link">
            Card sorting
          </a>
          <a href="#" className="hover-link">
            Prototype testing
          </a>
          <a href="#" className="hover-link">
            First click tests
          </a>
          <a href="#" className="hover-link">
            Preference tests
          </a>
          <a href="#" className="hover-link">
            Five second tests
          </a>
          <a href="#" className="hover-link">
            Design surveys
          </a>
        </div>

        <div className="link__column flex">
          <h4>Resources</h4>
          <a href="#" className="hover-link">
            Blog
          </a>
          <a href="#" className="hover-link">
            Examples
          </a>
          <a href="#" className="hover-link">
            Testing guides
          </a>
          <a href="#" className="hover-link">
            Help center
          </a>
          <a href="#" className="hover-link">
            Contact
          </a>
          <a href="#" className="hover-link">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
