import { existsSync, mkdirp, readJsonSync, writeJsonSync, mkdirpSync } from "fs-extra";
import { CONFIG_PATH, DOT_NOWA_PATH } from "./service/paths";

class Config {
  config: object

  constructor() {
    this.config = {};
  }

  // 初始化配置文件
  init () {
    if (existsSync(CONFIG_PATH)) {
      this.config = this.getConfig();
    } else {
      mkdirpSync(DOT_NOWA_PATH);
    }
    this.writeConfig(this.config);
  }

  getConfig() {
    return readJsonSync(CONFIG_PATH);
  }

  writeConfig(json: object) {
    return writeJsonSync(CONFIG_PATH, json, { spaces: 2 });
  }

  setItem(key: any, value: any) {
    if (value) {
      (this.config as any)[key] = value;
      this.writeConfig(this.config);
    }
  }

  getItem(key: any) {
    return (this.config as any)[key];
  }

}

const config = new Config();
config.init();

export default config;
