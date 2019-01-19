import { spawn } from "child_process";
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
    before() {
      if (process.env.RENDERER_PRE) {
        console.log("Luanching Main Process...");
        spawn("npm", ["run", "dev:main"], {
          env: process.env,
          shell: true,
          stdio: "inherit",
        })
          .on("close", (code) => process.exit(code))
          .on("error", (err) => console.log(err));
      }
    },
  },
  // devtool: "inline-source-map",
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: [
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
