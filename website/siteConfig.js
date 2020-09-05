const siteConfig = {
    title: 'Very Important Links', // Title for your website.
    tagline: 'Interesting Links and Documentation',
    url: 'https://mmkvdev.github.io', // Your website URL
    baseUrl: '/VIL/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'VIL',
    organizationName: 'mmkvdev',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [{ doc: 'doc1', label: 'Docs' }, { search: true }],

    /* path to images for header/footer */
    headerIcon: 'img/VIL_I.png',
    footerIcon: 'img/VIL_F.svg',
    favicon: 'img/VIL_I.png',

    /* Colors for website */
    colors: {
        primaryColor: '#00BFA6',
        secondaryColor: 'rgb(255,255,0)'
    },

    fonts: {
        myFont: ['SF Pro Display', 'SF Pro Icons']
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Made with Curiosity and Glares © ${new Date().getFullYear()}`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default'
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate'

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    // docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
