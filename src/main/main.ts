import { app, BrowserWindow } from "electron";
import { resolve } from "path";

let mainWindow: BrowserWindow | null;

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: { nodeIntegration: true }, // Electron Deprecation Warning
    width: 800,
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`file://${resolve(__dirname, "../../", "static")}/index.html`);
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

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
