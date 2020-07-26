module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-assets-lib/' : '',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/my-assets-lib' : ''
  }
}
