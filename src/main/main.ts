import { app, BrowserWindow } from "electron";
import { resolve } from "path";

let mainWindow: BrowserWindow | null;

const installElectronDevTool = async () => {
  const installer = require("electron-devtools-installer");
  const isUpgradeExtensions = !!process.env.IS_UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map((extension) => installer.default(installer[extension], isUpgradeExtensions)),
  ).catch(console.log);
};

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: { nodeIntegration: true }, // Electron Deprecation Warning
    width: 800,
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`file://${resolve(__dirname, "..", "renderer")}/index.html`);
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", async () => {
  if (process.env.NODE_ENV === "development") {
    await installElectronDevTool();
  }

  createWindow();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
