/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    forceSwcTransforms: true, // Force SWC transforms
  },
  // Ensure we're using the Pages Router
  useFileSystemPublicRoutes: true,
};

module.exports = nextConfig; 