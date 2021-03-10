'use strict';

const httpProxy = require('http-proxy');
const proxyPath = '/data';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  let proxy = httpProxy.createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    // include root path in proxied request
    req.url = proxyPath + '/' + req.url;

    proxy.web(req, res, { 
      target: 'http://localhost:9999/data',
      ignorePath: true
    });
  });
};
