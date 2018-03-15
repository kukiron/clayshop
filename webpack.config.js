const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { minimize: true } },
            { loader: "stylus-loader" }
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    }
  },
  plugins: [new ExtractTextPlugin("app.css")]
}
