import { spawn } from "child_process";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import nodeNotifier from "node-notifier";
import path from "path";
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
      title: packageConfig.name
    });
  };
};

const confDev: Configuration = merge.smart(confBase, {
  devServer: {
    // clientLogLevel: "warning", // [WDS] App hot update...
    contentBase: path.resolve(__dirname, "../../", "src/renderer"),
    // hot: true, // https://github.com/reduxjs/react-redux/pull/1137
    before() {
      if (process.env.RENDERER_PRE) {
        console.log("Luanching Main Process...");
        spawn("npm", ["run", "dev:main"], {
          env: process.env,
          shell: true,
          stdio: "inherit"
        })
          .on("close", code => process.exit(code))
          .on("error", err => console.log(err));
      }
    },
    // contentBase: sourcePath,
    historyApiFallback: {
      disableDotRule: true
    },
    hot: true,
    inline: true,
    stats: "minimal"
  },
  devtool: "inline-source-map",
  entry: {
    // resolve(__dirname, "../../", "src/renderer/renderer.ts"),
    [shareConf.base.entry]: ["./renderer.dev.tsx"]
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(t|j)sx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          "ts-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // [HMR] Hot Module Replacement is disabled
  ],
  target: "electron-renderer"
});

export default new Promise((resolve, reject) => {
  portfinder.basePort = Number(process.env.PORT) || shareConf.dev.port;
  portfinder.getPortPromise().then(
    (port: any) => {
      process.env.PROTOCOL = process.env.PROTOCOL || shareConf.dev.protocol;
      // ！:error TS2532: Object is possibly 'undefined'.
      confDev.devServer!.host = process.env.HOST =
        process.env.HOST || shareConf.dev.host;
      confDev.devServer!.port = process.env.PORT = port;

      // Must to be "http://localhost:8080/", not "http://localhost:8080"
      const publicPath = `${process.env.PROTOCOL}://${process.env.HOST}:${
        process.env.PORT
      }/`;
      confDev.devServer!.publicPath = confDev.output!.publicPath = process.env.PUBLIC_PATH = publicPath;
      process.env.ENTRY = shareConf.base.entry;
      // (confDev.entry as any)[shareConf.base.entry] = [].concat([
      //   `webpack-dev-server/client?${publicPath}` as never,
      //   "webpack/hot/only-dev-server" as never,
      //   ...(confDev.entry as any)[shareConf.base.entry],
      // ]);
      (confDev.entry as any)[shareConf.base.entry].unshift(
        "webpack/hot/only-dev-server"
      );
      (confDev.entry as any)[shareConf.base.entry].unshift(
        `webpack-dev-server/client?${publicPath}`
      );

      confDev.plugins!.push(
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [`Renderer process is running here: ${publicPath}`],
            notes: ["Enjoy it..."]
          },
          onErrors: createNotifierCallback
        })
      );

      resolve(confDev);
    },
    err => {
      reject(err);
    }
  );
});
