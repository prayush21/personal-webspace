"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const SimpleThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  // Start with false to avoid hydration mismatch
  const [isDark, setIsDark] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Use useLayoutEffect to run before paint
  useLayoutEffect(() => {
    // This runs on client immediately after DOM is ready but before paint
    const savedTheme = localStorage.getItem("theme");
    const hasDarkClass = document.documentElement.classList.contains("dark");

    console.log("Layout effect - immediate sync:", {
      savedTheme,
      hasDarkClass,
      currentIsDark: isDark,
    });

    // Set state based on localStorage
    if (savedTheme === "dark") {
      setIsDark(true);
      if (!hasDarkClass) {
        document.documentElement.classList.add("dark");
      }
    } else {
      setIsDark(false);
      if (hasDarkClass) {
        document.documentElement.classList.remove("dark");
      }
    }

    setIsHydrated(true);
  }, []);

  // Regular useEffect for any additional sync
  useEffect(() => {
    if (!isHydrated) return;

    console.log("Regular effect - post hydration:", {
      isDark,
      hasClass: document.documentElement.classList.contains("dark"),
    });
  }, [isDark, isHydrated]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
    isHydrated,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
