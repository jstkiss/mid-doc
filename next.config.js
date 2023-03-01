/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "github.com",
      port: "",
      // pathname: "/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/**",
    },
  ],
};

module.exports = { nextConfig, images };
