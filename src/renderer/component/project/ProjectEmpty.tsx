import React, { ComponentType, SFC } from "react";
import { IIntlModel, IProjectModel } from "../../model";
import { OProjectAction } from "../../action";
import { Grid, Paper, Button, Typography, Theme, withStyles, withTheme, WithStyles, WithTheme } from "@material-ui/core";
import { AddCircleOutline, FolderOpenOutlined } from "@material-ui/icons";
import { createStyle, ClassKey, style } from "./style";
import { remote } from "electron";
import { History } from "history";

interface IProps {
  intl: IIntlModel;
  actions: OProjectAction;
  history: History;
}

const ProjectEmptyBase: SFC<IProps & WithStyles<ClassKey> & WithTheme> = (props) => {
  const { classes, theme, intl, actions, history } = props;
  const importProject = () => {
    const importPath = remote.dialog.showOpenDialog({ properties: ["openDirectory"] });
    const projectPath = importPath[0];

    actions.importProject({ path: projectPath })
    history.push("/project")
  }

  return (
    <div style={style(theme).container}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={16}
        className={classes.root}>
        <Grid item xs={12}>
          <Typography align="center">
            <Button variant="contained" className={classes.item + " " + classes.button}>
              <AddCircleOutline className={classes.leftIcon} />
              <intl.FormattedMessage
                id="project.add"
              />
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Button variant="contained" className={`${classes.item} ${classes.button}`}  onClick={importProject}>
              <FolderOpenOutlined className={classes.leftIcon} />
              <intl.FormattedMessage
                id="project.import"
              />
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
};

const ProjectEmptyBaseWithStyle = withStyles(createStyle)(ProjectEmptyBase); // ProjectEmptyBase: props.classes
const ProjectEmptyBaseWithTheme: ComponentType<IProps> = withTheme()(ProjectEmptyBaseWithStyle); // ProjectEmptyBase: props.theme

export const ProjectEmpty: ComponentType<IProps> = ProjectEmptyBaseWithTheme;
