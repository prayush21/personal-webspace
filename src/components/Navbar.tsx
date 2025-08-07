"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getAssetPath } from "@/utils/paths";
import { useTheme } from "./SimpleThemeProvider";

interface NavbarProps {
  // No longer need theme props - using context
}

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  // { name: "IMDP", href: "/imdp" },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Large screen corner layout */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-20">
        {/* Top Left - Logo */}
        <div className="absolute top-10 left-10 pointer-events-auto">
          <Link href="/" className="block">
            <Image
              src={getAssetPath("/assets/logo-name.svg")}
              alt="Prayush Dave"
              width={160}
              height={64}
              className="h-16 w-auto transition-transform duration-200 hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Top Right - Theme Toggle */}
        <div className="absolute top-10 right-16 pointer-events-auto">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-light-background/80 dark:bg-dark-background/80 hover:bg-light-background/90 dark:hover:bg-dark-background/90 transition-colors duration-200 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 shadow-lg"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            ) : (
              <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            )}
          </button>
        </div>

        {/* Top Center - Navigation Links */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-auto">
          <nav className="flex space-x-6 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-neutral-200 dark:border-neutral-700 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile/Tablet navbar */}
      <header
        className={`lg:hidden fixed my-2 w-11/12 top-4 left-1/2 -translate-x-1/2 z-10 backdrop-blur border-t-2 border-t-neutral-100 border rounded-xl bg-light-background/0 dark:bg-dark-background/0 transition-all duration-300 ${
          open
            ? " border-b-2 border-b-neutral-500 shadow-md"
            : "shadow-neutral-500 shadow-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Desktop Logo/Name and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-xl font-bold text-lightTextPrimary dark:text-darkTextPrimary"
            >
              <Image
                src={getAssetPath("/assets/logo-name.svg")}
                alt="Prayush Dave"
                width={160}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </Link>
            {/* <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-light-background/80 dark:bg-dark-background/80 hover:bg-light-background/90 dark:hover:bg-dark-background/90"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            ) : (
              <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            )}
          </button> */}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-lightTextSecondary dark:text-darkTextSecondary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-lightTextPrimary dark:hover:text-darkTextPrimary cursor-pointer transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md bg-lightBackground/80 dark:bg-darkBackground/80"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-light-textPrimary dark:text-dark-textPrimary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-light-textPrimary dark:text-dark-textPrimary" />
            )}
          </button>
          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-lightBackground/80 dark:bg-darkBackground/80 hover:bg-lightBackground/90 dark:hover:bg-darkBackground/90 transition-colors duration-200"
            >
              {isDark ? (
                <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
              ) : (
                <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
              )}
            </button>

            <Link href="/">
              <Image
                src={getAssetPath("/assets/logo-name.svg")}
                alt="Prayush Dave"
                width={120}
                height={48}
                className="md:hidden h-12 w-auto"
                priority
              />
            </Link>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-full left-0 w-full bg-light-background/95 dark:bg-dark-background/95 transform transition-all duration-300 ease-in-out ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          } md:hidden z-20 shadow-lg rounded-xl backdrop-blur-sm mt-2`}
        >
          <div className="flex flex-col justify-normal gap-8 rounded-xl pt-4 pb-10 px-4">
            {/* Top section with Logo */}
            {/* <div className="flex items-start justify-between">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md bg-lightBackground/80 dark:bg-darkBackground/80 hover:bg-lightBackground/90 dark:hover:bg-darkBackground/90 transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6 text-lightTextPrimary dark:text-darkTextPrimary" />
            </button>
            <div className="flex gap-1">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-full bg-lightBackground/80 dark:bg-darkBackground/80 hover:bg-lightBackground/90 dark:hover:bg-darkBackground/90 transition-colors duration-200"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
                )}
              </button>
              <img src={logoName} alt="Prayush Dave" className="h-12 w-auto" />
            </div>
          </div> */}

            {/* Main Section with Navigation Links in the Middle for Mobile Screens */}
            <div className="flex items-end justify-between">
              <ul className="flex flex-col space-y-4 text-lightTextSecondary dark:text-darkTextSecondary">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-lightTextPrimary dark:hover:text-darkTextPrimary cursor-pointer text-lg transition-colors duration-200 block"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 w-full justify-around">
              <a href="https://x.com/prayushdave">
                <svg className="icon">
                  <use href="#icon-x" />
                </svg>
              </a>
              <a href="https://github.com/prayush21">
                <svg className="icon">
                  <use href="#icon-github" />
                </svg>
              </a>
              <a href="https://www.instagram.com/prayushdave">
                <svg className="icon">
                  <use href="#icon-instagram" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/prayush-dave/">
                <svg className="icon">
                  <use href="#icon-linkedin" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@prayushdave">
                <svg className="icon">
                  <use href="#icon-youtube" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 md:hidden z-10 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
