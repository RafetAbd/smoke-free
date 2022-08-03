const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool : 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-react'
                  ]
                }
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}

