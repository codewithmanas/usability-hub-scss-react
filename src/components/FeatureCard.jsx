import React from "react";

const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="features__card flex">
      <img src={logo} alt="card sorting" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="secondary-button">
        Learn more <i className="fa-solid fa-right-long"></i>
      </a>
    </div>
  );
};

export default FeatureCard;
