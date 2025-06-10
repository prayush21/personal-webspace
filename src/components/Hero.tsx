import React from "react";

const Hero: React.FC = () => (
  <section className="text-start">
    <h1 className="text-4xl md:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary">
      Hey,
      <br /> I am Prayush!
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </h1>
    <p className="mt-4 text-lg md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
      I am a design-minded engineer.
      <br /> I love to tinker and prototype stuff, from{" "}
      <strong className="text-light-highlight dark:text-dark-accent">
        Systems
      </strong>{" "}
      to{" "}
      <strong className="text-light-highlight dark:text-dark-accent">UI</strong>
      .
    </p>
  </section>
);

export default Hero;
