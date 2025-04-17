import React from "react";
import FeatureLogo1 from "../assets/asset_11.svg";
import FeatureLogo2 from "../assets/asset_13.svg";
import FeatureLogo3 from "../assets/asset_14.svg";
import FeatureLogo4 from "../assets/asset_15.svg";
import FeatureLogo5 from "../assets/asset_16.svg";
import FeatureLogo6 from "../assets/asset_17.svg";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {

    const features = [
        {
            logo: FeatureLogo1,
            title: "Card sorting",
            description: "Discover how people group and label information."

        },
        {
            logo: FeatureLogo2,
            title: "Prototype tests",
            description: "Discover how people navigate your Figma prototypes."

        },
        {
            logo: FeatureLogo3,
            title: "First click tests",
            description: "Test interaction with first click and navigation tests."
        },
        {
            logo: FeatureLogo4,
            title: "Design surveys",
            description: "Get feedback on images, videos or audio files."
        },
        {
            logo: FeatureLogo5,
            title: "Preference tests",
            description: "Find out which designs users prefer and why."
        },
        {
            logo: FeatureLogo6,
            title: "Five second tests",
            description: "Test comprehensibility by measuring first impressions."
        },
    ]

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__heading__text">
            Your user research Swiss Army knife
          </h2>
          <a href="#" className="secondary-button">
            See all features <i className="fa-solid fa-right-long"></i>
          </a>
        </div>

        <div className="features__area flex">
                {
                    features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))
                }
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
