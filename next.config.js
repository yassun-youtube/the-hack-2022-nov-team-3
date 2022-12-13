/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ['res.cloudinary.com', 'loremflickr.com', 'picsum.photos', 'storage.googleapis.com'],
  },
}
