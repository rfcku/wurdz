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
  env: {
    API_URL: process.env.API_URL,
    SOCKET_URI: process.env.SOCKET_URI,
    DEFAULT_USER: process.env.DEFAULT_USER,
    DEFAULT_USER_PASSWORD: process.env.DEFAULT_USER_PASSWORD,
  },
};
// const removeImports = require('next-remove-imports')();
module.exports = removeImports(nextConfig);

// module.exports = withVideos(nextConfig);
