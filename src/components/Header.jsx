import React from "react";
import HeaderLogo from "../assets/asset_2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex header__section">
        <div className="header__left">
          <h1>Design confidently.</h1>
          <p>
            UsabilityHub is a remote user research platform that takes the
            guesswork out of design decisions by validating them with real
            users.
          </p>
          <a href="#" className="primary-button header__cta">
            Get started
          </a>
        </div>
        <div className="header__right">
          <img src={HeaderLogo} alt="header logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
