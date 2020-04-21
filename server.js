const express = require('express');
const path = require('path');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotEnv = require('dotenv');

const env = `.env.${(process.env.NODE_ENV || 'development')}`;

dotEnv.config({ path: env });

// Create the express app.
const app = express();

// Remove express header.
app.disable('x-powered-by');

// Compression middleware.
app.use(compression());

function pathRewrite(str) {
    const obj = {};
    obj[`^${str}`] = '/';
    return obj;
};

// Proxy
app.use(process.env.VUE_APP_API_AIRTABLE_URI, createProxyMiddleware({
  target: process.env.API_AIRTABLE_URI,
  changeOrigin: true,
  pathRewrite: pathRewrite(process.env.VUE_APP_API_AIRTABLE_URI),
}));

app.use('/', express.static(path.join(__dirname, '/dist')));

// Catch all routes and redirect to the index file.
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Create default port to serve the app on
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

