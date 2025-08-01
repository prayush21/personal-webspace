import React from "react";
import Image from "next/image";
import { Project } from "@/utils/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-[#2863AA] dark:bg-[#151914] rounded-[4px] shadow-blueprintCard transition-all duration-300 ease-in-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
      {/* Tape pieces */}
      <div className="absolute -top-2 -left-2 w-12 h-6 pointer-events-none motion-safe:group-hover:rotate-[-3deg] transition-transform duration-300 z-10">
        <Image
          src="/assets/tape-left-top.svg"
          alt=""
          width={48}
          height={24}
          className="w-full h-full transform -rotate-2"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-12 h-6 pointer-events-none motion-safe:group-hover:rotate-[4deg] transition-transform duration-300 z-10">
        <Image
          src="/assets/tape-right-bottom.svg"
          alt=""
          width={48}
          height={24}
          className="w-full h-full transform rotate-3"
        />
      </div>

      {/* Card content */}
      <div className="relative overflow-hidden rounded-[4px]">
        {/* Screenshot */}
        <div className="relative w-full h-48 sm:h-56 lg:h-64">
          <Image
            src={project.screenshotSrc}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover rounded-t-[4px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 47vw"
          />
        </div>

        {/* Project info */}
        <div className="p-6">
          <h3 className="text-white font-sans text-xl font-bold mb-4 leading-tight">
            {project.title}
          </h3>

          {/* Action chips */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white border border-white/50 rounded-full transition-all duration-200 hover:bg-white hover:text-[#2863AA] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2863AA]"
              >
                Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white border border-white/50 rounded-full transition-all duration-200 hover:bg-white hover:text-[#2863AA] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2863AA]"
              >
                GitHub
              </a>
            )}
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
