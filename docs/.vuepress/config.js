const path = require('path');
module.exports = {
  themeConfig: {
    search: false,
    navbar: false,
  },
  head: [
    ['script', {src: './dist/bootstrap/js/bootstrap.min.js'}],
    ['script', {src: './dist/jquery/jquery-3.3.1.slim.min.js'}],
    ['script', {src: './dist/popper/1.14.0/umd/popper.min.js'}],
    ['link', { rel: 'stylesheet', href: './css/loopback.css'}],
    ['link', { rel: 'stylesheet', href: './dist/bootstrap/css/bootstrap.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans'}]
  ],
  // chainWebpack: (config, isServer) => {
  //   config.resolveLoader
  //   .modules
  //   .add(path.resolve(__dirname, './../../dist/jquery'))
  //   .add(path.resolve(__dirname, './../../dist/popper'))
  // }
}