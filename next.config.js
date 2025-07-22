const nextConfig = {
  // Handle trailing slashes consistently
  trailingSlash: false,
  
  // Ensure proper page extensions are handled
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  output: 'standalone',
  
  images: {
    domains: ['memate-website.s3.ap-southeast-2.amazonaws.com'],
    unoptimized: true,
  },
  
  /**
   * 
   * @returns handle redirects
   */
  async redirects() {
    return [
      {
        source: '/expense-categorisation-guide-australia',
        destination: '/news/expense-categorisation-guide-australia',
        permanent: true,
      },
      // Basic redirects
      {
        source: '/what-is-memate',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/data-single',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/data-single/memate-enterprise-pty-limited',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/data-single/safety-xpress-online',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/internal-chat',
        destination: '/features/internal-communication-tools',
        permanent: true,
      },
      {
        source: '/features-news',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/keep-your-teams-productivity-in-check-with-workforce-management-system',
        destination: '/news/keep-your-team-s-productivity-in-check-with-workforce-management-system',
        permanent: true,
      },
      {
        source: '/memate-for-advertising-agencies-streamlining-project-management-and-contractor-management',
        destination: '/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management',
        permanent: true,
      },
      {
        source: '/news/category/11',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/features/your-business-news-management',
        destination: '/features',
        permanent: true,
      },
      {
        source: '/thank-you-contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/news/ideal-tools-for-smbs',
        destination: '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news/top-business-process-management-software',
        destination: '/news/top-5-business-process-management-software-in-2022',
        permanent: true,
      },
      {
        source: '/task-management',
        destination: '/features/task-management-software',
        permanent: true,
      },      
      // Pattern-based redirects
      {
        source: '/news/page/:page',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/product-category/device/:path*',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/:path*/feed',
        destination: '/news',
        permanent: true,
      },
    ];
  },
  
  /**
   * 
   * @returns handle 404 errors
   */
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