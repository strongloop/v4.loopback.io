module.exports = {
    dest: 'site',
    
    head: [
        ['link', {href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans', rel: 'stylesheet'}]
    ],

    themeConfig: {
        nav: [
            {text: 'Getting Started', link: '/getting-started.html'},
            {text: 'Contribute', link: 'https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md'},
            {text: 'Docs', link: 'http://loopback.io/doc/en/lb4'},
            {text: 'GraphQL', link: 'http://v4.loopback.io/oasgraph.html'}
        ],
        logo: '/global/loopback-full-logo-blue.svg',
    }
}
