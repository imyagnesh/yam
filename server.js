'use strict';

const path = require('path');
const express = require('express');
const passport = require('passport');
const app = express();
const compression = require('compression');
const logger = require('./logger');

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());

require('./server/index');
// load passport strategies
require('./server/passport');

// pass the authorization checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

const publicApi = require('./server/routes/publicApi');
const protectedApi = require('./server/routes/api');
app.use('/publicApi', publicApi);
app.use('/api', protectedApi);

if (isProd) {
    const publicPath = '/';
    const outputPath = path.resolve(process.cwd(), 'build');

    // compression middleware compresses your server responses which makes them
    // smaller (applies also to assets). You can read more about that technique
    // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression());
    app.use(publicPath, express.static(outputPath));

    app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
} else {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.dev.config');
    const compiler = webpack(webpackConfig);

    const middleware = webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        silent: true,
        stats: 'errors-only',
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    const fs = middleware.fileSystem;

    app.get('*', (req, res) => {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send(file.toString());
            }
        });
    });
}

// Start your app.
app.listen(port, ip, function onStart(err) {
    if (err) {
        logger.error(err);
    }
    logger.info('Listening on http://localhost:' + port);
});