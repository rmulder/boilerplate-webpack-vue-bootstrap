const Path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: Path.resolve(__dirname, './src/main.js'),
  mode: "development",
  output: {
    path: Path.resolve(__dirname, './www/build'),
    publicPath: 'build/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: '',
            css: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                {
                  loader: 'css-loader',
                },
                'postcss-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [
                      Path.resolve('./node_modules/bootstrap/scss')
                    ]
                  }
                }
              ]
            })
          },
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css?[hash]')
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: Path.resolve(__dirname, './www'),
    publicPath: "http://localhost:8080/build/",
    historyApiFallback: false,
    noInfo: false,
    compress: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}
