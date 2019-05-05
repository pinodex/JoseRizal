module.exports = {
  productionSourceMap: false,

  css: {
    extract: {
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].css',
    }
  },

  configureWebpack: {
    output: {
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].js',
    }
  },

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
