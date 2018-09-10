module.exports =  function (config, isServer) {
  config.resolveLoader.modules.unshift(__dirname+'/'+'loaders')
  // puml loader
  config.module.rules.push({
    test: /\.puml$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          mimetype: 'image/svg+xml',
          limit: 4096
        }
      },
      {
        loader: 'puml-loader'
      },
    ]
  })
}