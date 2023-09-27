const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (
  port,
  mode = "development",
  open,
  skipHtmlPlugin = false,
  entryFileExtension = ".tsx"
) => {
  return {
    mode,
    entry: `./src/index${entryFileExtension}`,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: `[name].[hash].js?v=${new Date().valueOf()}`,
      publicPath: `http://localhost:${port}/`,
    },
    devServer: {
      ...(skipHtmlPlugin
        ? {}
        : {
            static: {
              directory: path.resolve(__dirname, "./public"),
            },
            static: "./public",
          }),
      port,
      hot: true,
      open: !!open,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s[ac]ss?$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jp?g|gif)$/,
          use: {
            loader: "file-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".jsx", ".js", ".tsx", ".ts"],
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      ...(skipHtmlPlugin
        ? []
        : [
            new HtmlWebpackPlugin({
              cache: true,
              chunks: true,
              filename: "index.html",
              template: path.resolve("public/index.html"),
            }),
          ]),
      // new webpack.ProvidePlugin({
      //   process: "process/browser",
      // }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        "...",
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };
};
