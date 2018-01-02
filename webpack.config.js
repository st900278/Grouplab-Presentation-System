const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: []
}
