import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Allows embedding from any origin.
            // For specific origins, you could use: "frame-ancestors https://example.com https://another.example.com"
            value: 'frame-ancestors *',
          },
        ],
      },
    ];
  },
  devIndicators: {
    allowedDevOrigins: [
      'https://9000-firebase-studio-1748633528189.cluster-c3a7z3wnwzapkx3rfr5kz62dac.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
