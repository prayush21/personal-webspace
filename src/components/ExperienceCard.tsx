import React from "react";
import Image from "next/image";
import { Experience } from "@/utils/experiences";
import { getAssetPath } from "@/utils/paths";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { years, title, org, summary, stat, links } = experience;

  return (
    <div className="group relative bg-[#2863AA] dark:bg-[#151914] rounded-[4px] shadow-blueprintCard transition-all duration-300 ease-in-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
      {/* Tape pieces */}
      <div className="absolute -top-2 -left-2 w-12 h-6 pointer-events-none motion-safe:group-hover:rotate-[-3deg] transition-transform duration-300 z-10">
        <Image
          src={getAssetPath("/assets/tape-left-top.svg")}
          alt=""
          width={48}
          height={24}
          className="w-full h-full transform -rotate-45"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-12 h-6 pointer-events-none motion-safe:group-hover:rotate-[4deg] transition-transform duration-300 z-10">
        <Image
          src={getAssetPath("/assets/tape-right-bottom.svg")}
          alt=""
          width={48}
          height={24}
          className="w-full h-full transform -rotate-45"
        />
      </div>

      <div className="p-6">
        <p className="md:hidden font-architects text-white/70 text-sm mb-2">
          {years}
        </p>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white font-sans text-xl font-bold leading-tight">
              {title}
            </h3>
            {org && <p className="text-white/70 text-sm mt-1">{org}</p>}
          </div>
          {stat && (
            <div className="shrink-0 text-right">
              <p className="font-architects text-3xl text-white leading-none">
                {stat.value}
              </p>
              <p className="text-[11px] text-white/70 mt-1 max-w-[7rem] ml-auto">
                {stat.label}
              </p>
            </div>
          )}
        </div>

        <p className="text-white/90 mt-4 leading-relaxed">{summary}</p>

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white border border-white/50 rounded-full transition-all duration-200 hover:bg-white hover:text-[#2863AA] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2863AA]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
