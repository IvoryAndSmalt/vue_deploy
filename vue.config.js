// ## `vue.config.js`

// Here are all the available options with default values (all optional):

// ``` js
module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: '/',
  pwa: {
    themeColor: '#ffffff',
  },

  // where to output built files
  outputDir: 'dist',
}
