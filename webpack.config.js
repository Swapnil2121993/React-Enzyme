var webpack = require('webpack'),
    port = 3000,
    config = {
        entry: [
            'webpack-dev-server/client?http://localhost:' + port,
            'webpack/hot/only-dev-server',
            './index.js'
        ],
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        module: {
            loaders: [
                {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
            ]
        },
        resolve: {
            extensions: ['', '.js']
        },
        devtool: 'source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            port: port,
            info: false,
            historyApiFallback: true,
            hot: true,
            contentBase: '.',
            host: '0.0.0.0'
        },
        bail: true
    };

module.exports = config;
