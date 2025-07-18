/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// Only add basePath and assetPrefix in production
if (isProd) {
  nextConfig.basePath = "/personal-webspace";
  nextConfig.assetPrefix = "/personal-webspace/";
}

export default nextConfig;
