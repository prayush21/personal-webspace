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

// const navLinks = [
//   { name: "About", href: "/about" },
//   { name: "Works", href: "/works" },
// ];

const HomePage: React.FC = () => {
  // simple theme toggle state; apply 'dark' class on <html>
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // const [showNav, setShowNav] = useState<boolean>(false);

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

      {/* Rectangle Corner Layout for large screens */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-30">
        {/* Bottom Left - DynamicTicker */}
        <div className="absolute bottom-10 left-10 pointer-events-auto">
          <DynamicTicker />
        </div>

        {/* Bottom Right - Space Plane */}
        <div className="absolute bottom-10 right-10 pointer-events-auto">
          <Image
            src={getAssetPath("/assets/space-plane.svg")}
            alt="Decorative space plane"
            width={200}
            height={200}
            className="h-48 w-auto transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>

      <main className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>

        {/* DynamicTicker for mobile and tablet screens */}
        <div className="lg:hidden mb-8 flex justify-start">
          <DynamicTicker />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
