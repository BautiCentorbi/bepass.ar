/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bepass.com.ar',
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
      'https://www.bepass.com.ar/sitemap.xml',
    ],
  },
};
