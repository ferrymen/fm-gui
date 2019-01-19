import { resolve } from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import confBase from "./webpack.conf.base";

const publicPath = "http://localhost:8080/"; // Must to be "http://localhost:8080/", not "http://localhost:8080"

export default merge.smart(confBase, {
  devServer: {
    // contentBase: resolve(__dirname, "../../", "dev"),
    hot: true,
    publicPath,
  },
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/only-dev-server",
      "./src/renderer/renderer.dev.tsx",
    ],
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(t|j)sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            cacheDirectory: true,
            plugins: [
              "react-hot-loader/babel",
            ],
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } }, // or whatever your project requires
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  output: {
    publicPath, // webpack output is served from http://localhost:8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // [HMR] Hot Module Replacement is disabled
  ],
  target: "electron-renderer",
});
