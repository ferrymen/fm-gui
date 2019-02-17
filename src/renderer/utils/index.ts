import { readJSONSync } from "fs-extra";
import { join } from "path";

export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
  return (Object.keys(target) as K[]).reduce(
    (res, key) => {
      if (!omitKeys.includes(key)) {
        res[key] = target[key];
      }
      return res;
    },
    {} as any
  );
}

export const readPkgJson = (filePath: string) =>
  readJSONSync(join(filePath, 'package.json'));

export const getProjectInfoByPath = (filePath: string) => {
  const pkg = readPkgJson(filePath);

  return {
    name: pkg.name,
    path: filePath
  }
}

export const hideBoilerplateDesp = (str: string, length = 40) => {
  if (!str) return 'No description.';
  const size = str.length;
  if (size <= length) return str;
  return str.slice(0, length - 3) + '...';
};
