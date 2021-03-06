var webpack = require('webpack');
var path = require('path');

// variables
var isProduction =
    process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    context: sourcePath,
    entry: {
        app: './main.tsx'
    },
    output: {
        path: outPath,
        filename: isProduction ? '[contenthash].js' : '[hash].js',
        chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ['module', 'browser', 'main'],
        alias: {
            app: path.resolve(__dirname, 'src/app/'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
        },
    },
    module: {
        rules: [
            // .ts, .tsx
            {
                test: /\.tsx?$/,
                use: [
                    !isProduction && {
                        loader: 'babel-loader',
                        options: {plugins: ['react-hot-loader/babel']}
                    },
                    'ts-loader'
                ].filter(Boolean)
            },
            // css
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
            // static assets
            {test: /\.html$/, use: 'html-loader'},
            {
                test: /\.(a?svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                        },
                    },
                ],
            },
            // {
            //     test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
            //     use: 'file-loader'
            // }
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10,
                    filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[hash].js'
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        }),
        new WebpackCleanupPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[contenthash].css' : '[hash].css',
            disable: !isProduction
        }),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal',
        clientLogLevel: 'warning'
    },
    // https://webpack.js.org/configuration/devtool/
    // devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    devtool: 'source-map',
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
};
