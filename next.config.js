/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // config image url
  images: {
    domains: ["gstatic.com"],
  },
};

module.exports = nextConfig;
