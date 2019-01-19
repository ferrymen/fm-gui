import { resolve } from "path";

const confBase = {
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: "./src/renderer/renderer.ts",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json"],
  },
};

export default confBase;
