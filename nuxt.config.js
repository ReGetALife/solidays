import path from 'path'
import fs from 'fs'
import generateList from './assets/js/generateList.js'

const routes = []
const dirPath = path.resolve('static/article')
const files = fs.readdirSync(dirPath)
files.forEach(function (file) {
  const filePath = path.join(dirPath, file)
  if (fs.statSync(filePath).isFile()) {
    routes.push('/article/' + file.substring(0, file.length - 3))
  }
})

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: { browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://solidays.cn' : 'http://localhost:3000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  hooks: {
    build: {
      before () {
        generateList()
      }
    },
    generate: {
      before () {
        generateList()
      }
    }
  },
  generate: {
    routes
  }
}
