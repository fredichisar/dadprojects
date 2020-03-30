// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Dad Projects",
  siteUrl: `https://dadprojects.fr`,
  host: "0.0.0.0",
  titleTemplate: "%s - Creative projects",
  siteDescription: "Creative projects for Home, Learning, Fun and many more..",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "pages/**/*.md",
        typeName: "PagePost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/admin'],
        config: {
          '/projects/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/journal/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://dadprojects.fr',
        sitemap: 'https://dadprojects.fr/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-162038333-1'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  templates: {
    PagePost: '/:title'
  }
};
