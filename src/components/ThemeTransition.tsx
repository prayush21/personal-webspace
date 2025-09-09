"use client";

import React, { useEffect, useState } from "react";

interface ThemeTransitionProps {
  darkMode: boolean;
}

const ThemeTransition: React.FC<ThemeTransitionProps> = ({ darkMode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [darkMode]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-blueprint-pattern opacity-100 transform transition-transform duration-1000 ${
          darkMode ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3Cpath d='M10,10 L90,10 M10,30 L90,30 M10,50 L90,50 M10,70 L90,70 M10,90 L90,90 M30,10 L30,90 M50,10 L50,90 M70,10 L70,90' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ThemeTransition;
