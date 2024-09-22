/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  transpilePackages: ['nextstepjs'],
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "images.oyoroomscdn.com",
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.symbols.com",
      "cdn.pixabay.com",
      "www.google.com",
      "encrypted-tbn0.gstatic.com"
    ],
  },
};

export default nextConfig;
