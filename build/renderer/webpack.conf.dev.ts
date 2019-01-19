import { resolve } from "path";
import merge from "webpack-merge";
import confBase from "./webpack.conf.base";

export default merge.smart(confBase, {
  devServer: {
    contentBase: resolve(__dirname, "../../", "dev"),
  },
  mode: "development",
  output: {
    publicPath: "dev", // webpack output is served from http://localhost:8080
  },
  target: "electron-renderer",
});
