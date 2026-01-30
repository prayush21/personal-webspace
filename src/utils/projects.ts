import { getAssetPath } from "./paths";

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
    title: "Connect Signull - a multiplayer word game",
    screenshotSrc: getAssetPath("/assets/connect-screenshot.png"),
    demoUrl: "https://connect-signull.vercel.app/",
    repoUrl: "https://github.com/prayush21/connect-a-fun-social-game",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Connect - a collaborative word game (Prototype)",
    screenshotSrc: getAssetPath("/assets/connect-screenshot.png"),
    demoUrl: "https://connect-38fe1.web.app/",
    repoUrl: "https://github.com/prayush21/connect-a-fun-social-game",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Cricket D3 (Dismissal Distribution Dashboard)",
    screenshotSrc: getAssetPath("/assets/cricket-tera-dashboard.png"),
    repoUrl: "https://github.com/prayush21/cricket-tera",
    tags: ["Python", "Data Analysis & Visualization", "PostgresDB"],
  },
  {
    id: "4",
    title: "Wordle for Mom",
    screenshotSrc: getAssetPath("/assets/wordle-clone-image.png"),
    demoUrl: "https://wordleforreal.netlify.app/",
    repoUrl: "https://github.com/prayush21/wordle-react",
    tags: ["Creative Coding", "Typescript", "React"],
  },
  {
    id: "5",
    title: "Weather Dashboard",
    screenshotSrc: getAssetPath("/assets/weather-app-ss.png"),
    demoUrl: "https://weather-app-zeta-silk-68.vercel.app/",
    repoUrl: "https://github.com/prayush21/weather-app",
    tags: ["React", "Redux", "OpenWeather API"],
  },
];
