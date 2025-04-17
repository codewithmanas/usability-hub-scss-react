import React from "react";

const SubFooter = () => {
  return (
    <div className="sub__footer">
      <div className="container flex sub__footer__container">
        <a href="#" className="hover-link">
          Privacy policy
        </a>
        <a href="#" className="hover-link">
          Terms & conditions
        </a>
        <a href="#" className="hover-link">
          Security information
        </a>

        <a href="#" className="hover-link">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#" className="hover-link">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SubFooter;
