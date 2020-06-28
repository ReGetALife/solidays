const fs = require('fs')
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

let routes = ['/', '/about', '/article']
const dirPath = path.resolve('public/article')
const files = fs.readdirSync(dirPath)
files.forEach(function (file) {
  const filePath = path.join(dirPath, file)
  if (fs.statSync(filePath).isFile()) {
    routes.push('/article/' + file.substring(0, file.length - 3))
  }
})

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // ref: https://github.com/chrisvfritz/prerender-spa-plugin#advanced-usage-webpackconfigjs
        new PrerenderSpaPlugin({
          staticDir: path.join(__dirname, 'dist'),
          // prerender routes
          routes,
          renderer: new Renderer({
            // render util ready
            renderAfterDocumentEvent: 'page-is-ready',
            headless: true
          })
        })
      );
    }
  }
};