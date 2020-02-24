import pkg from './package'
import sanityClient from './sanityClient'

const routesQuery = `
  {
    "projects": *[_type == "project"],
  }
`

export default {
  mode: 'spa',
  router: {
    mode: 'hash'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Thank you for stopping by.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' },
      {
        rel: 'stylesheet',
        href: process.env.FONT_URL
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },

  /*
   ** Global CSS
   */
  styleResources: {
    scss: [
      '~/assets/styles/abstracts/functions/*.scss',
      '~/assets/styles/abstracts/mixins/*.scss',
      '~/assets/styles/abstracts/variables/*.scss'
    ]
  },
  css: [{ src: '~/assets/styles/index.scss', lang: 'scss' }],

  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Generate dynamic routes from data from sanity.
   ** Used only for generating static served HTML files
   */
  generate: {
    routes: () => {
      return sanityClient.fetch(routesQuery).then(res => {
        return [...res.projects.map(item => `/project/${item.slug}`)]
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
