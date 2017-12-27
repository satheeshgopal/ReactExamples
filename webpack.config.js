var config = {
    entry: './main.js',
    devtool: 'source-map',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['env', 'stage-0', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;