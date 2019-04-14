const path = require('path')

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/' //缓存的中文件   页面可以自动更新
    },
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 1717
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
                query: { //支持es2015 和react
                    presets: ['es2015', 'react'],
                    plugins:["transform-object-rest-spread"]
                },
                
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    },
    watch: true,
}