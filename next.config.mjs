/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  trailingSlash: false,
  output: 'standalone',
}

export default nextConfig