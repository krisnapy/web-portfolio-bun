/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'avatars.githubusercontent.com',
      'storage.googleapis.com',
      'brandslogos.com',
      'res.cloudinary.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
