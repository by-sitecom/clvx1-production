/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "backend.clvx1.com",
      "clvx1.com",
      "clvx1.sitecom.by",
    ],
  },
};

module.exports = nextConfig;
