// const ModuleFederationPlugin = require('webpack-plugin-module-federation');

const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withVideos(nextConfig);
