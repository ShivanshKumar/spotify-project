/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jslpaaoabuqvkimukeui.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
