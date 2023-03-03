/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

(module.exports = {
  async redirects() {
    return [
      {
        source: "/Aktiviteter/Barnfamilj",
        destination: "/Aktiviteter",
        permanent: true,
      },
    ];
  },
}),
  nextConfig;
