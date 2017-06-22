var req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});