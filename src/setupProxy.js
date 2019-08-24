const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://106.12.79.128:8848',
        pathRewrite: {
            "^/api": ""
        }
    }));
    // app.use(proxy('/auth', {
    //     target: 'http://127.0.0.1:4002/',
    //     pathRewrite: {
    //         "^/auth": ""
    //     }
    // }));
};