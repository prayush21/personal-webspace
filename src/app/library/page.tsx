"use client";

import React from "react";
import { BackgroundGrid, Navbar } from "@/components";
import styles from "./page.module.css";

const LibraryPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className={styles.body}>
          {/* This class comes from your new CSS Module */}
          <h1 className={`${styles.title} text-light-text dark:text-dark-text`}>
            My Library
          </h1>

          {/* You can still use Tailwind utility classes! */}
          <p className="mt-4 text-lg text-light-textSecondary dark:text-dark-textSecondary">
            Welcome to the library section.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LibraryPage;
