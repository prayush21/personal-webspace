export interface Project {
  id: string;
  title: string;
  screenshotSrc: string;
  demoUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Connect - a collaborative word game",
    screenshotSrc: "/assets/connect-screenshot.png",
    demoUrl: "https://connect-38fe1.web.app/",
    repoUrl: "https://github.com/prayush21/connect-a-fun-social-game",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Cricket Era Dashboard",
    screenshotSrc: "/assets/space-plane-2.png",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/repo",
    tags: ["Python", "Data Analysis & Visualization", "PostgresDB"],
  },
  {
    id: "3",
    title: "Weather Dashboard",
    screenshotSrc: "/assets/space-plane-2.png",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/repo",
    tags: ["React", "API Integration", "Chart.js"],
  },
];
