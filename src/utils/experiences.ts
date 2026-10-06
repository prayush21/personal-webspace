export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  years: string;
  title: string;
  org?: string;
  summary: string;
  stat?: { value: string; label: string };
  links?: ExperienceLink[];
}

// Newest first.
export const experiences: Experience[] = [
  {
    id: "ra-stony-brook",
    years: "2026 – now",
    title: "Research Assistant",
    org: "Stony Brook University",
    summary:
      "Researching how Vision Language Models perceive design and beauty.",
  },
  {
    id: "student-affairs",
    years: "2026 – now",
    title: "Web & Digital Marketing Assistant",
    org: "Student Affairs, Stony Brook University · Part-time",
    summary: "Running the web and digital presence for Student Affairs.",
  },
  {
    id: "ms",
    years: "2025",
    title: "MS, Computer Engineering",
    org: "Stony Brook University",
    summary: "Moved across the world to keep building and learning.",
  },
  {
    id: "products",
    years: "2025",
    title: "Products",
    org: "Side projects",
    summary:
      "A Chrome extension that hit ~100 installs in a year with zero marketing, and a multiplayer word game.",
    stat: { value: "~100", label: "installs, no marketing" },
    links: [
      { label: "Connect Signull", href: "https://connect-signull.vercel.app/" },
      {
        label: "Video Player",
        href: "https://chromewebstore.google.com/detail/hglkjjlgpdiaohggjagghfnmihmdljoi",
      },
    ],
  },
  {
    id: "distribution",
    years: "2024 – 25",
    title: "Distribution",
    org: "Mellise Candles",
    summary:
      "Ran social for a friend's candle brand: creator outreach, collabs and co-made videos. My own reels crossed 500K views on a ~100-follower page.",
    stat: { value: "₹1L", label: "revenue in FY25" },
  },
  {
    id: "juniperforge",
    years: "2023 – 24",
    title: "Senior Product Engineer",
    org: "JuniperForge",
    summary:
      "Innovating education for aspirants. Chief architect of the edtech platform.",
  },
  {
    id: "kristal",
    years: "2022 – 23",
    title: "Software Engineer",
    org: "Kristal.AI",
    summary:
      "Software for democratizing finance. Built tools used by B2B partners.",
    stat: { value: "300+", label: "B2B partners" },
  },
  {
    id: "deutsche-bank",
    years: "Summer 2021",
    title: "Intern",
    org: "Deutsche Bank",
    summary:
      "Built an internal transfer engine and a data visualization tool for the bank.",
  },
  {
    id: "startup-weekend",
    years: "2020",
    title: "Startup Weekend",
    summary:
      "Took an idea for bringing electronics education to schools from zero to a funding pitch in one weekend.",
  },
  {
    id: "techniquiri",
    years: "2019 – 21",
    title: "Co-founder, Techniquiri",
    summary:
      "Real-world education from university students to school students. Built a matching algorithm to pair mentors with student groups for more fun and learning.",
    stat: { value: "700", label: "students taught" },
  },
  {
    id: "10x",
    years: "2018",
    title: "The 10x Challenge",
    org: "Undergrad",
    summary:
      "₹200 at 8 a.m., ₹2,300 by evening. Our poster printing business sold door to door across the hostels and won.",
    stat: { value: "11.5×", label: "in one day" },
  },
];
