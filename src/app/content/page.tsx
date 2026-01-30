"use client";

import React from "react";
import { BackgroundGrid, Navbar, VideoGrid } from "@/components";
import { videos } from "@/utils/cloudinary";

const ContentPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Section */}
        <div className="text-center my-12 md:my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-light-text dark:text-dark-text mb-4">
            Content
          </h1>
          <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            Short-form videos and creative content
          </p>
        </div>

        {/* Video Grid */}
        <div className="max-w-6xl mx-auto">
          <VideoGrid videos={videos} />
        </div>
      </main>
    </div>
  );
};

export default ContentPage;
