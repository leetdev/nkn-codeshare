const path = require('path')
const webpack = require('webpack');

module.exports = {
  webpack: function (config, env) {
    // POLYFILLS FOR NODE.JS CORE MODULES
    if (!config.resolve.fallback) {
      config.resolve.fallback = {}
    }
    config.resolve.fallback.crypto = 'crypto-browserify'
    config.resolve.fallback.path = 'path-browserify'
    config.resolve.fallback.stream = 'stream-browserify'

    // PATCHED MODULES
    config.resolve.alias.webworkify = path.resolve(__dirname, 'lib', 'webworkify')

    // AUTO-IMPORT NODE CORE POLYFILLS
    config.plugins.unshift(new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }))

    // FIX MJS MODULE RESOLVING. TODO: COMLINK FIX to remove this issue
    config.module.rules.unshift({
      test: /comlink\.mjs/,
      resolve: {
        fullySpecified: false,
      }
    })

    // SOURCE PATH ALIASES
    config.resolve.alias['~common'] = path.resolve(__dirname, 'src', 'common')
    config.resolve.alias['~main'] = path.resolve(__dirname, 'src', 'main')
    config.resolve.alias['~worker'] = path.resolve(__dirname, 'src', 'worker')

    return config
  },
}
