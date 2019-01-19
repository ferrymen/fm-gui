import { resolve } from "path";

const confBase = {
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    renderer: "./src/renderer/renderer.tsx",
  },
  output: {
    filename: "[name].js",
  },
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
