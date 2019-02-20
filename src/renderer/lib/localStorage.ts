import { remote } from "electron";
import { existsSync } from "fs-extra";
import { join } from "path";
import { LOCAL_PROJECTS } from "./constant";

const config = remote.getGlobal('config');

export const getStoreProjects = () => config.getItem(LOCAL_PROJECTS) || [];

export const setLocalProjects = (projects: any) =>
  config.setItem(LOCAL_PROJECTS, projects);

export const getLocalProjects = () => {
  const projects = getStoreProjects();
  const filter = projects.filter((project: any) =>
    existsSync(join(project.path, 'package.json'))
  );

  setLocalProjects(filter);

  return filter;
};