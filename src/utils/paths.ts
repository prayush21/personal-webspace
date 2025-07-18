/**
 * Utility function to handle asset paths for GitHub Pages deployment
 * In production, adds the basePath prefix for correct GitHub Pages subdirectory routing
 * In development, returns the path as-is
 */
export const getAssetPath = (path: string): string => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/personal-webspace" : "";
  return `${basePath}${path}`;
};
