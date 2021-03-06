module.exports = {
  siteMetadata: {
    owner: 'Your Name Here',
    // This will be used in the site title
    title: 'Gatsby Skeleton',
    // This will be used in the site copyright
    startYear: 2017,
  },
  plugins: [
    // Use styled-components for CSS-in-JS
    'gatsby-plugin-styled-components',
    // Add react-helmet for changing tags in the page head
    'gatsby-plugin-react-helmet',
    // Add support for Google analytics
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // Get tracking id for property from your Google Analytics account.
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    // Add the articles dir to src path
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/content/articles`,
      },
    },
    // Add the pages dir to src path
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Define which files can be used as downloads and where to put them
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'downloads',
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // The maximum width of images on the site.
              maxWidth: 1200,
              // Set the quality of the processed images
              quality: 60,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
  ],
};
