const siteConfig = {
    title: 'Very Important Links',
    tagline: 'Interesting Links and Documentation',
    url: 'https://mmkvdev.github.io',
    baseUrl: '/VIL/',
    projectName: 'VIL',
    organizationName: 'mmkvdev',
    headerLinks: [{ doc: 'Actix/actix', label: 'Docs' }, { search: true }],
    headerIcon: 'img/VIL_I.png',
    footerIcon: 'img/VIL_F.svg',
    favicon: 'img/VIL_I.png',
    colors: {
        primaryColor: '#00BFA6',
        secondaryColor: 'rgb(255,255,0)'
    },
    fonts: {
        myFont: ['SF Pro Display', 'SF Pro Icons']
    },
    copyright: `Made with Curiosity and Glares © ${new Date().getFullYear()}`,
    highlight: {
        theme: 'default'
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate',

    algolia: {
        apiKey: '692343975d9d7c6bbd68bbaf2e4251fd',
        indexName: 'mmkvdev_vil',
        placeholder: 'Search in Documentation'
    }
};

module.exports = siteConfig;
