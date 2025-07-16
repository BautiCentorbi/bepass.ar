/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.muta.ai',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    additionalSitemaps: [
      'https://www.muta.ai/sitemap.xml',
    ],
  },
};
