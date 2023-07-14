/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: "./tsconfig.json",
  },
};

module.exports = nextConfig;
