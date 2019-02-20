import { join } from "path";
import { homedir } from "os";

export const DOT_NOWA_PATH = join(homedir(), '.fm-gui');
export const CONFIG_PATH = join(DOT_NOWA_PATH, 'config.json');
