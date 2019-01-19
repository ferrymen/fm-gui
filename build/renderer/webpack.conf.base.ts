import { resolve } from "path";

const confBase = {
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: "./src/renderer/renderer.tsx",
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
    extensions: [".js", ".ts", ".tsx", ".json"], // ".js":Module not found: Error: Can't resolve 'object-assign'
  },
};

export default confBase;
