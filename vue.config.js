// vue.config.js
const path = require('path');
module.exports = {
    publicPath: '/',
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@info': path.resolve(__dirname, 'src/pages/info'),
            '@user': path.resolve(__dirname, 'src/pages/user')
          },
        },
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        user: {
            entry: 'src/pages/user/main.js',
            template: 'public/user/index.html',
            filename: 'user/index.html',
        },
        info: {
            entry: 'src/pages/info/main.js',
            template: 'public/info/index.html',
            filename: 'info/index.html',
        },

    }
}