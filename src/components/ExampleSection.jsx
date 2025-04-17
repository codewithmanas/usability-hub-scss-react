import React from "react";

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

  return (
    <section className="examples__section">
      <div className="container">
        <div className="examples__header">
          <h2 className="examples__heading__text">
            One platform, endless possibilities
          </h2>
          <a href="#" className="secondary-button">
            See more examples <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="examples__area flex">
          {exampleCards.map((card, index) => (
            <a href="#" key={index} className="examples__card">
              <h3 className="card__text">{card.text}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
