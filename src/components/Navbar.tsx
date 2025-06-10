import React, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logoName from "./../assets/logo-name.svg";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const navLinks = ["About", "Works", "IMDP"];

const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed my-2 w-11/12 top-4 left-1/2 -translate-x-1/2 shadow-neutral-500 shadow-md z-10 backdrop-blur border-t-2 border-t-neutral-100 rounded-xl  bg-lightBackground/0 dark:bg-darkBackground/0">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Desktop Logo/Name and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-xl font-bold text-lightTextPrimary dark:text-darkTextPrimary">
            <img src={logoName} alt="Prayush Dave" className="h-16 w-auto" />
          </div>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-light-background/80 dark:bg-dark-background/80 hover:bg-light-background/90 dark:hover:bg-dark-background/90"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            ) : (
              <MoonIcon className="h-6 w-6 text-lightAccent dark:text-darkAccent" />
            )}
          </button>
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
            <XMarkIcon className="h-6 w-6 text-lightTextPrimary dark:text-darkTextPrimary" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-lightTextPrimary dark:text-darkTextPrimary" />
          )}
        </button>
        <img
          src={logoName}
          alt="Prayush Dave"
          className="md:hidden h-12 w-auto"
        />
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-full bg-light-background/95 dark:bg-dark-background/95 transform transition-all duration-300 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden z-20 shadow-lg rounded-xl backdrop-blur-sm`}
      >
        <div className="flex flex-col rounded-xl  min-h-screen justify-between pt-4 pb-10 px-4">
          {/* Top section with Logo */}
          <div className="flex items-start justify-between">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md bg-lightBackground/80 dark:bg-darkBackground/80 hover:bg-lightBackground/90 dark:hover:bg-darkBackground/90 transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6 text-lightTextPrimary dark:text-darkTextPrimary" />
            </button>
            <img src={logoName} alt="Prayush Dave" className="h-12 w-auto" />
          </div>

          {/* Bottom section with Navigation Links */}
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
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed shadow-white shadow-md rounded-xl bg-light-background dark:bg-dark-card h-svh inset-0 md:hidden z-10 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
