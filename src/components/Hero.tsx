import React from "react";
// import WaitlistSignup from "./WaitlistSignup";
// import NewsletterSignup from "./NewsletterSignup";

const Hero: React.FC = () => (
  <section className="text-start">
    <h1 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary">
      Hey,
      <br /> I am Prayush!
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </h1>
    <p className="mt-4 text-lg md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl text-start">
      I am a product engineer.
      <br /> I love to tinker and build stuff, from{" "}
      <strong className="text-light-highlight dark:text-dark-accent">
        games
      </strong>{" "}
      to{" "}
      <strong className="text-light-highlight dark:text-dark-accent">
        systems
      </strong>
      .
    </p>

    {/* Waitlist signup - commented out, now using modal popup */}
    {/* 
    <div className="mt-8">
      <WaitlistSignup
        variant="hero"
        description="🚀 Want to try out a new collaborative word-guessing game? Join the mailing list!"
        placeholder="your.email@example.com"
        className="text-left"
      />
    </div>
    */}
  </section>
);

export default Hero;
