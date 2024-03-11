const path = require("path");
const webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const bundleOutputDir = "./dist";

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);
  return [
    {
      entry: "./src/main.js",
      output: {
        filename: "widget.js",
        path: path.resolve(bundleOutputDir),
      },
      devServer: {
        static: {
          directory: path.join(__dirname, bundleOutputDir),
        },
      },
      optimization: {
        minimize: !isDevBuild,
        minimizer: [new TerserPlugin()],
      },
      plugins: isDevBuild
        ? [
            new webpack.SourceMapDevToolPlugin(),
            new copyWebpackPlugin({
              patterns: [{ from: "demo/", to: "" }],
            }),
          ]
        : [new TerserPlugin()],
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      targets: {
                        browsers: ["ie 6", "safari 7"],
                      },
                    },
                  ],
                ],
              },
            },
          },
          { test: /\.html$/i, use: "html-loader" },
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader" + (isDevBuild ? "" : "?minimize"),
            ],
          },
        ],
      },
    },
  ];
};
