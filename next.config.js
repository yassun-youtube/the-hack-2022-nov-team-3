/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: [
      'images.microcms-assets.io',
      'res.cloudinary.com',
      'loremflickr.com',
      'picsum.photos',
    ],
  },
}
