"use client";

import React from "react";
import { BackgroundGrid, Navbar, ProjectCard } from "@/components";
import { projects } from "@/utils/projects";

const WorksPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title Section */}
        <div className="text-center my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-light-text dark:text-dark-text mb-4">
            Works
          </h1>
          <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating
            meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorksPage;
