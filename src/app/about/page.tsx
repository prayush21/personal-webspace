"use client";

import React, { useEffect, useState } from "react";
import { BackgroundGrid, Navbar } from "@/components";

const AboutPage: React.FC = () => {
  // Theme toggle state to match the home page pattern
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title Section */}
        <div className="text-center my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-light-text dark:text-dark-text mb-4">
            About Me
          </h1>
          {/* <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            A deeper dive into who I am, what drives me, and how I approach
            building meaningful digital experiences.
          </p> */}
        </div>

        {/* Blog-like Content */}
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert prose-neutral max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                Hey there! 👋
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-4 text-lg leading-relaxed">
                <p>
                  I&apos;m Prayush, a product engineer who finds joy in the
                  entire journey from
                  <strong className=" dark:text-dark-accent">
                    {" "}
                    idea conception{" "}
                  </strong>
                  to
                  <strong className=" dark:text-dark-accent">
                    {" "}
                    product delivery
                  </strong>
                  . My passion lies in bridging the gap between &quot;what
                  if&quot; and &quot;what is&quot; – turning concepts into
                  tangible, meaningful digital experiences.
                </p>
                <p>
                  Whether it&apos;s a quick weekend prototype or a full-scale
                  product launch, I approach each project with curiosity,
                  creativity, and a relentless focus on solving real problems
                  for real people.
                </p>
              </div>
            </section>

            {/* Philosophy */}
            {/* <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                My Philosophy
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-4 text-lg leading-relaxed">
                <p>
                  I believe that the best products emerge from a deep
                  understanding of both
                  <strong className=" dark:text-dark-accent">
                    {" "}
                    technical possibilities{" "}
                  </strong>
                  and
                  <strong className=" dark:text-dark-accent">
                    {" "}
                    human needs
                  </strong>
                  . This dual perspective allows me to create solutions that are
                  not just functionally robust, but also intuitive and
                  delightful to use.
                </p>
                <p>
                  My approach is iterative and collaborative. I start with MVPs
                  to validate assumptions quickly, then evolve them into
                  polished products through continuous feedback and improvement.
                  This methodology has served me well across various domains and
                  scales of projects.
                </p>
              </div>
            </section> */}

            {/* What I Do */}
            {/* <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                What I Do
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-6 text-lg leading-relaxed">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <h3 className="text-xl font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                      Product Engineering
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                      Full-stack development with a product mindset. I focus on
                      building scalable, maintainable solutions that grow with
                      your business needs.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <h3 className="text-xl font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                      Rapid Prototyping
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                      Quick validation of ideas through functional prototypes. I
                      help teams test assumptions early and iterate fast.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <h3 className="text-xl font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                      MVP Development
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                      Building minimum viable products that capture the essence
                      of your vision while being lean and focused on core value
                      propositions.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <h3 className="text-xl font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                      Product Strategy
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                      Helping teams align technical decisions with business
                      goals, ensuring that every feature serves a purpose in the
                      broader product vision.
                    </p>
                  </div>
                </div>
              </div>
            </section> */}

            {/* Journey */}
            {/* <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                My Journey
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-4 text-lg leading-relaxed">
                <p>
                  My path into product engineering wasn&apos;t linear, and I
                  think that&apos;s been my greatest strength. Each twist and
                  turn has given me a unique perspective on how technology can
                  solve diverse challenges across different industries and
                  contexts.
                </p>
                <p>
                  From building my first &quot;hello world&quot; program to
                  shipping products that serve thousands of users, I&apos;ve
                  learned that the technical skill is just the foundation. The
                  real magic happens when you combine technical expertise with
                  empathy, curiosity, and a genuine desire to make people&apos;s
                  lives better.
                </p>
                <p>
                  Today, I continue to learn, experiment, and push boundaries.
                  Every project teaches me something new, and I&apos;m excited
                  about what tomorrow might bring.
                </p>
              </div>
            </section> */}

            {/* When I'm Not Coding */}
            {/* <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                When I&apos;m Not Coding
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-4 text-lg leading-relaxed">
                <p>
                  I believe that diverse experiences fuel creativity. When I
                  step away from the screen, you might find me exploring new
                  places, diving into a good book, or experimenting with
                  different forms of creative expression.
                </p>
                <p>
                  These moments of &quot;non-productivity&quot; often lead to my
                  most innovative ideas. There&apos;s something about
                  disconnecting from the immediate problem that allows the
                  subconscious mind to make unexpected connections.
                </p>
              </div>
            </section> */}

            {/* Let's Connect */}
            {/* <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
                Let&apos;s Build Something Together
              </h2>
              <div className="text-light-textSecondary dark:text-dark-textSecondary space-y-4 text-lg leading-relaxed">
                <p>
                  I&apos;m always excited to connect with fellow builders,
                  dreamers, and problem-solvers. Whether you have a wild idea
                  that needs validation, a technical challenge that needs
                  solving, or just want to chat about the intersection of
                  technology and human experience, I&apos;d love to hear from
                  you.
                </p>
                <p>
                  The best products come from collaborative efforts where
                  different perspectives converge to create something greater
                  than the sum of its parts. Let&apos;s explore what we can
                  create together.
                </p>
              </div>
            </section> */}

            {/* Social Links */}
            <section className="mb-12 pt-8 border-t border-light-border dark:border-dark-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6 text-center">
                Let&apos;s Connect
              </h2>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://x.com/prayushdave"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-x" />
                  </svg>
                </a>
                <a
                  href="https://github.com/prayush21"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-github" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/prayushdave"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-instagram" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/prayush-dave/"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-linkedin" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@prayushdave"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-youtube" />
                  </svg>
                </a>
                <a
                  href="https://prayushdave.substack.com/"
                  className="transition-transform hover:scale-110"
                >
                  <svg className="icon">
                    <use href="#icon-substack" />
                  </svg>
                </a>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
