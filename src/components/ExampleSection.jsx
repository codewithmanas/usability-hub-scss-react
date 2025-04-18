import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ExampleSection = () => {
  const exampleCards = [
    {
      text: "Can users complete a task in my software interface?",
    },
    {
      text: "Can users find important pages on my website?",
    },
    {
      text: "Is my website's intended audience clear?",
    },
    {
      text: "Do visitors understand what a page is about?",
    },
  ];

  // Parent variant to control stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Time delay between each card animation
      },
    },
  };


    // Each card's animation
    const cardVariants = {
      hidden: { y: 200 },
      visible: { y: 0 },
    };

  return (
    <section className="examples">
      <div className="container">
        <div className="examples__header">
          <h2 className="examples__heading__text">
            One platform, endless possibilities
          </h2>
          <a href="#" className="secondary-button">
            See more examples <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        className="examples__area flex">
          {exampleCards.map((card, index) => (
            <motion.a 
            // initial={{ opacity: 0, y: 200 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1 }}
            // viewport={{ once: true}}
            variants={cardVariants}
            transition={{ duration: 0.8 }}
            href="#" key={index} className="examples__card">
              <h3 className="examples__card__text">{card.text}</h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleSection;
