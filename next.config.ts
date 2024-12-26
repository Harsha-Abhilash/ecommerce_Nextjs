import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  images: {
    domains: ['localhost', 'https://heroic-beauty-85276b92ee.strapiapp.com/'], // Add your Strapi domain
  },
};
export default nextConfig;
module.exports = {
  images: {
    domains: ['heroic-beauty-85276b92ee.media.strapiapp.com'], // Add your image domain here
  },
};

