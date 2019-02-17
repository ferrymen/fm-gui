import React from "react";
import { IIntlModel, IProjectModel } from "../../model";
import { OProjectAction } from "../../action";
import { Grid } from "@material-ui/core";

interface IProps {
  intl: IIntlModel;
  actions: OProjectAction;
  project: IProjectModel;
}

export const ProjectDetial = (props: IProps) => {
  const { intl, actions, project } = props;

  return (
    <Grid container>
      <Grid item>
        {JSON.stringify(project)}
      </Grid>
    </Grid>
  )
};
