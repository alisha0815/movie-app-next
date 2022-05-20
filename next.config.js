/** @type {import('next').NextConfig} */

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
};

module.exports = nextConfig;
