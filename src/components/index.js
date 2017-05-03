const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

module.exports['Theme'] = require('./themes/default').default;

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})

module.exports['Config'] = require('./config').default;
