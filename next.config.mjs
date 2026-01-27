/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure proper routing
  trailingSlash: false,
  // Add output configuration for Vercel
  output: 'standalone',
}

export default nextConfig
