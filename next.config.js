/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["127.0.0.1"],
    domains: ["api.tarikcoffee.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint warnings/errors during builds
  },
};

module.exports = nextConfig;
