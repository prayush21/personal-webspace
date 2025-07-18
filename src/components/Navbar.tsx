import React, { useState } from "react";
import Image from "next/image";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getAssetPath } from "@/utils/paths";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const navLinks = ["About", "Works", "IMDP"];

const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed my-2 w-11/12 top-4 left-1/2 -translate-x-1/2 z-10 backdrop-blur border-t-2 border-t-neutral-100 border rounded-xl bg-light-background/0 dark:bg-dark-background/0 transition-all duration-300 ${
        open
          ? " border-b-2 border-b-neutral-500 shadow-md"
          : "shadow-neutral-500 shadow-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Desktop Logo/Name and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-xl font-bold text-lightTextPrimary dark:text-darkTextPrimary">
            <Image
              src={getAssetPath("/assets/logo-name.svg")}
              alt="Prayush Dave"
              width={160}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </div>
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
            <li
              key={link}
              className="hover:text-lightTextPrimary dark:hover:text-darkTextPrimary cursor-pointer"
            >
              {link}
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
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-lightBackground/80 dark:bg-darkBackground/80 hover:bg-lightBackground/90 dark:hover:bg-darkBackground/90 transition-colors duration-200"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            ) : (
              <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            )}
          </button>

          <Image
            src={getAssetPath("/assets/logo-name.svg")}
            alt="Prayush Dave"
            width={120}
            height={48}
            className="md:hidden h-12 w-auto"
            priority
          />
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
                <li
                  key={link}
                  className="hover:text-lightTextPrimary dark:hover:text-darkTextPrimary cursor-pointer text-lg transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {link}
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
  );
};

export default Navbar;
