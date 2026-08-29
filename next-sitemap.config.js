/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bepass.com.ar',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // El sitio tiene muy pocas URLs: un solo sitemap.xml plano alcanza y
  // evita el índice de sitemaps (innecesario acá, y causante del error
  // de "indexación anidada" en Search Console).
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*', '/opengraph-image', '/twitter-image'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    // No agregar additionalSitemaps con la propia URL de sitemap.xml:
    // next-sitemap ya la incluye automáticamente en robots.txt, y
    // declararla acá hacía que el índice de sitemaps se referenciara
    // a sí mismo ("indexación anidada" en Search Console).
  },
};
