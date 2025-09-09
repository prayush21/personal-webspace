"use client";

import React from "react";
import { BackgroundGrid, Navbar } from "@/components";

const VideoPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar />

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title Section */}
        {/* <div className="text-center my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-light-text dark:text-dark-text mb-4">
            Summer Internship
          </h1>
          <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            My summer internship experience in an unconventional fashion.
          </p>
        </div> */}

        {/* Video Section */}
        <div className="flex flex-col items-center justify-center gap-4 my-8 md:my-20 lg:my-2">
          <div className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-xs aspect-[9/16] rounded-xl overflow-hidden border border-light-border dark:border-dark-border shadow-lg bg-light-surface/30 dark:bg-dark-surface/30">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FbdBolce1Ng?si=CaSgd2p7S5UNsaRY?rel=0&modestbranding=1&playsinline=1"
              title="Summer Internship Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            a video cover letter
          </p>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
