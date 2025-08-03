/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['fonts.googleapis.com', 'cdnjs.cloudflare.com'],
  },
}

module.exports = nextConfig 