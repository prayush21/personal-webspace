/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personal-webspace",
  assetPrefix: "/personal-webspace/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
