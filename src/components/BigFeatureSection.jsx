import React from "react";
import FeatureLogo1 from "../assets/asset_18.png";
import FeatureLogo2 from "../assets/asset_21.png";
import FeatureLogo3 from "../assets/asset_24.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const BigFeatureSection = () => {
  const bigFeatures = [
    {
      logo: FeatureLogo1,
      heading: "Effortless validation for",
      subHeading: "Design professionals",
      description:
        "Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.",
    },
    {
      logo: FeatureLogo2,
      heading: "Optimisation for",
      subHeading: "Marketers",
      description:
        "Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.",
    },
    {
      logo: FeatureLogo3,
      heading: "Easier decision making for",
      subHeading: "Product managers",
      description:
        "Ensure you're delivering the right features to the right customers by validating product concepts with your target audience.",
    },
  ];

  return (
    <>
      {bigFeatures.map((feature, index) => (
        <motion.section 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
        key={index} className="big__features">
          <div className={`container ${index % 2 == 0 ? "flex" : "reverse-flex"} big__features__container`}>
            <div className="big__features__img">
              <img src={feature.logo} alt="writing image" />
            </div>
            <motion.div 
            initial={{ x: `${index % 2 == 0 ? "100%" : "-100%"}` }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="big__features__desc flex">
              <h4>{feature.heading}</h4>
              <h3>{feature.subHeading}</h3>
              <p>{feature.description}</p>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default BigFeatureSection;
