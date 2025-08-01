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
    screenshotSrc: "/assets/cricket-tera-dashboard.png",
    // demoUrl: "https://example.com",
    repoUrl: "https://github.com/prayush21/cricket-tera",
    tags: ["Python", "Data Analysis & Visualization", "PostgresDB"],
  },
  {
    id: "4",
    title: "Wordle for Mom",
    screenshotSrc: "/assets/wordle-clone-image.png",
    demoUrl: "https://wordleforreal.netlify.app/",
    repoUrl: "https://github.com/prayush21/wordle-react",
    tags: ["Creative Coding", "Typescript", "React"],
  },
  {
    id: "3",
    title: "Weather Dashboard",
    screenshotSrc: "/assets/weather-app-ss.png",
    demoUrl: "https://weather-app-zeta-silk-68.vercel.app/",
    repoUrl: "https://github.com/prayush21/weather-app",
    tags: ["React", "Redux", "OpenWeather API"],
  },
];
