import { spawn } from "child_process";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import nodeNotifier from "node-notifier";
import portfinder from "portfinder";
import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
import packageConfig from "../../package.json";
import shareConf from "../share/config";
import confBase from "./webpack.conf.base";

const createNotifierCallback = () => {
  return (severity: any, errors: any) => {
    console.log(errors);
    if (severity !== "error") {
      return;
    }

    const error = errors[0];

    nodeNotifier.notify({
      message: severity + ": " + error.name,
      title: packageConfig.name,
    });
  };
};

const confDev: Configuration = merge.smart(confBase, {
  devServer: {
    // contentBase: resolve(__dirname, "../../", "dev"),
    hot: true,
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
    [shareConf.base.entry]: [
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
              // "add-module-exports",
              "react-hot-loader/babel",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // [HMR] Hot Module Replacement is disabled
  ],
  target: "electron-renderer",
});

export default new Promise((resolve, reject) => {
  portfinder.basePort = Number(process.env.PORT) || shareConf.dev.port;
  portfinder.getPortPromise().then(
    (port: any) => {

      process.env.PROTOCOL = process.env.PROTOCOL  || shareConf.dev.protocol;
      // ！:error TS2532: Object is possibly 'undefined'.
      confDev.devServer!.host = process.env.HOST = process.env.HOST || shareConf.dev.host;
      confDev.devServer!.port = process.env.PORT = port;

      // Must to be "http://localhost:8080/", not "http://localhost:8080"
      const publicPath = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/`;
      confDev.devServer!.publicPath = confDev.output!.publicPath = process.env.PUBLIC_PATH  = publicPath;
      process.env.ENTRY = shareConf.base.entry;
      // (confDev.entry as any)[shareConf.base.entry] = [].concat([
      //   `webpack-dev-server/client?${publicPath}` as never,
      //   "webpack/hot/only-dev-server" as never,
      //   ...(confDev.entry as any)[shareConf.base.entry],
      // ]);
      (confDev.entry as any)[shareConf.base.entry].unshift("webpack/hot/only-dev-server");
      (confDev.entry as any)[shareConf.base.entry].unshift(`webpack-dev-server/client?${publicPath}`);

      confDev.plugins!.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`Renderer process is running here: ${publicPath}`],
          notes: ["Enjoy it..."],
        },
        onErrors: createNotifierCallback,
      }));

      resolve(confDev);
    },
    (err) => {
      reject(err);
    },
  );
});
