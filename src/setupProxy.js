const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/filebase',
    createProxyMiddleware({
      target: 'https://s3.filebase.com',
      changeOrigin: true,
      pathRewrite: {
        '^/filebase': '',
      },
    })
  );
};
