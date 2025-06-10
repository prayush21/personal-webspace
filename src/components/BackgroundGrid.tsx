import React from "react";

const BackgroundGrid: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    width="100%"
    height="100%"
  >
    <defs>
      {/* Minor grid pattern (20px) */}
      <pattern
        id="minor-grid-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M20 0 L0 0 0 20"
          className="stroke-light-grid/30 dark:stroke-dark-grid/30"
          fill="none"
          strokeWidth="0.5"
        />
      </pattern>

      {/* Major grid pattern (100px) */}
      <pattern
        id="major-grid-pattern"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M100 0 L0 0 0 100"
          className="stroke-light-grid dark:stroke-dark-grid"
          fill="none"
          strokeWidth="1"
        />
      </pattern>
    </defs>

    {/* Layer the patterns - minor grid first, then major grid */}
    <rect width="100%" height="100%" fill="url(#minor-grid-pattern)" />
    <rect width="100%" height="100%" fill="url(#major-grid-pattern)" />
  </svg>
);

export default BackgroundGrid;
