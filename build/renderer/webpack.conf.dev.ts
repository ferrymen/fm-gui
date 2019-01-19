import { resolve } from "path";
import merge from "webpack-merge";
import confBase from "./webpack.conf.base";

export default merge.smart(confBase, {
  mode: "development",
  // output: {
  //   publicPath: `http://localhost:8080`, // webpack output is served from http://localhost:8080
  // },
  target: "electron-renderer",
});
