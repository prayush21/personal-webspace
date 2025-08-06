/**
 * Utility function to handle asset paths for Netlify deployment
 * Returns the path as-is since Netlify serves from root domain
 */
export const getAssetPath = (path: string): string => {
  return path;
};
