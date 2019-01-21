import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { resolve } from "path";

const confBase = {
  context: resolve(__dirname, "../../", "src/renderer"),
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: "./src/renderer/renderer.tsx",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(t|j)sx?$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    filename: "[name].js",
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // tsconfig: resolve(__dirname, "../../", "src/renderer/tsconfig.json"),
    }),
  ],
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".json", // ".js":Module not found: Error: Can't resolve 'object-assign'
    ],
  },
};

export default confBase;
