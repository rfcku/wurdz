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
    // SECRET: process.env.SECRET,
    // REDIS_URL: process.env.REDIS_URL,
    // AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    // AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    // AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    // AUTH0_ADMIN_EMAIL: process.env.AUTH0_ADMIN_EMAIL,
    // AUTH0_ISSUER: process.env.AUTH0_ISSUER,
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // API_URL: process.env.API_URL,
    // SOCKET_URI: process.env.SOCKET_URI,
    DEFAULT_USER: process.env.DEFAULT_USER,
    DEFAULT_USER_PASSWORD: process.env.DEFAULT_USER_PASSWORD,
  },
};
// const removeImports = require('next-remove-imports')();
module.exports = removeImports(nextConfig);

// module.exports = withVideos(nextConfig);
