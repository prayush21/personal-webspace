import React from "react";
// import NewsletterSignup from "./NewsletterSignup";

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
      I am a product engineer.
      <br /> I love to tinker and prototype stuff, from{" "}
      <strong className="text-light-highlight dark:text-dark-accent">
        MVPs
      </strong>{" "}
      to{" "}
      <strong className="text-light-highlight dark:text-dark-accent">
        Products
      </strong>
      .
    </p>

    {/* Newsletter signup */}
    {/* <div className="mt-8">
      <NewsletterSignup
        variant="hero"
        description="🚀 Currently building something new. Get early access when it's ready!"
        placeholder="your.email@example.com"
        className="text-left"
      />
    </div> */}
  </section>
);

export default Hero;
