/** @type {import('next').NextConfig} */
const nextConfig = {
  // Handle trailing slashes consistently
  trailingSlash: false,
  
  // Ensure proper page extensions are handled
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Configure for production builds
  output: 'standalone',
  
  // Optimize images (excluding S3 links as requested)
  images: {
    domains: ['memate-website.s3.ap-southeast-2.amazonaws.com'],
    unoptimized: true,
  },
  
  // Ensure proper error handling
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/404',
        },
      ],
    };
  },
};

module.exports = nextConfig;
