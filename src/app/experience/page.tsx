"use client";

import React from "react";
import { BackgroundGrid, ExperienceCard, Navbar } from "@/components";
import { experiences } from "@/utils/experiences";

const ExperiencePage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title Section */}
        <div className="text-center my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-light-text dark:text-dark-text mb-4">
            Experience
          </h1>
          <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            Where I&apos;ve worked, built and hustled, newest first.
          </p>
        </div>

        {/* Dimension-line timeline */}
        <ol className="relative max-w-5xl mx-auto">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[10px] md:left-1/2 border-l-2 border-dashed border-white/40 dark:border-dark-accent/50"
          />

          {experiences.map((exp, i) => {
            const cardLeft = i % 2 === 0;
            return (
              <li
                key={exp.id}
                className="relative pl-10 md:pl-0 pb-12 last:pb-0 md:grid md:grid-cols-2"
              >
                {/* Node on the line */}
                <span
                  aria-hidden
                  className="absolute left-[10px] md:left-1/2 top-[1.65rem] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#2377D7] dark:border-dark-accent dark:bg-dark-background z-10"
                />
                {/* Connector from line to card */}
                <span
                  aria-hidden
                  className={`absolute top-[1.65rem] h-px bg-white/50 dark:bg-dark-accent/50 left-[10px] w-8 ${
                    cardLeft
                      ? "md:left-auto md:right-1/2 md:w-12"
                      : "md:left-1/2 md:w-12"
                  }`}
                />

                <div
                  className={`md:row-start-1 ${
                    cardLeft ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <ExperienceCard experience={exp} />
                </div>

                {/* Year, on the opposite side of the line (desktop) */}
                <div
                  className={`hidden md:flex md:row-start-1 pt-3 font-architects text-xl text-white/80 ${
                    cardLeft
                      ? "md:col-start-2 pl-12 justify-start"
                      : "md:col-start-1 pr-12 justify-end"
                  }`}
                >
                  {exp.years}
                </div>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
};

export default ExperiencePage;
