/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://citymoverset.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/contact.php"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/contact.php"] },
    ],
  },
};
