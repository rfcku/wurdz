// const ModuleFederationPlugin = require('webpack-plugin-module-federation');

const withVideos = require("next-videos");
const removeImports = require("next-remove-imports")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};
// const removeImports = require('next-remove-imports')();
module.exports = removeImports(nextConfig);

// module.exports = withVideos(nextConfig);
