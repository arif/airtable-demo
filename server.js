const express = require('express');
const path = require('path');
const compression = require('compression');
const proxy = require('http-proxy-middleware');
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
