import React from "react";
import HeaderLogo1 from "../assets/asset_3.png";
import HeaderLogo2 from "../assets/asset_4.png";
import HeaderLogo3 from "../assets/asset_5.png";
import HeaderLogo4 from "../assets/asset_6.png";
import HeaderLogo5 from "../assets/asset_7.png";
import HeaderLogo6 from "../assets/asset_8.svg";
import HeaderLogo7 from "../assets/asset_9.png";

const CompanySection = () => {

    const headerLogos = [
        HeaderLogo1,
        HeaderLogo2,
        HeaderLogo3,
        HeaderLogo4,
        HeaderLogo5,
        HeaderLogo6,
        HeaderLogo7,
    ]

  return (
    <section className="companies">
      <div className="container">
        <div className="small-bold-text companies__header">
          The world's best companies rely on UsabilityHub to make better design
          decisions.
        </div>
        <div className="companies__logos flex">
          {headerLogos.map((logo, index) => (
            <img key={index} className="companies__logo" src={logo} alt={`logo-${index+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
