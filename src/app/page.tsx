"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BackgroundGrid,
  Navbar,
  Hero,
  DynamicTicker,
  //ThemeTransition,
} from "@/components";
import { getAssetPath } from "@/utils/paths";

const HomePage: React.FC = () => {
  // simple theme toggle state; apply 'dark' class on <html>
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      {/* <ThemeTransition darkMode={darkMode} /> */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
      />

      <main className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
        <div className="mb-8 flex items-center justify-between">
          <DynamicTicker />
          {/* <img
            src={darkMode ? "/assets/doodle-dark.svg" : "/assets/doodle-light.svg"}
            alt="Decorative doodle"
            className="hidden lg:block absolute right-10 w-auto"
          /> */}
          <Image
            src={getAssetPath("/assets/space-plane.svg")}
            alt="Decorative doodle"
            width={288}
            height={288}
            className="h-72 hidden lg:block absolute bottom-5 right-32 w-auto border-white shad"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
