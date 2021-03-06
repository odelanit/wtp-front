export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    server: {
        host: '0.0.0.0',
        port: 80
    },
    head: {
        title: 'wtp-front',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: '/css/all.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/css/style.css'
            },
        ],
        script: [
            {
                src: '/js/jquery.min.js'
            },
            {
                src: '/js/bootstrap.min.js'
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
