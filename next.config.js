module.exports = {
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/my-assets-lib' : ''
  }
}
