import { StyleRules } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export type ClassKey = "@global";

export const createStyle = (): StyleRules<ClassKey> => {
  const Resizer: CSSProperties = {
    background: "#000",
    opacity: 0.2,
    zIndex: 1,
    MozBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    MozBackgroundClip: "padding",
    WebkitBackgroundClip: "padding",
    backgroundClip: "padding-box",
    "&:hover": {
      WebkitTransition: "all 2s ease",
      transition: "all 2s ease"
    },
    "&.horizontal": {
      height: "11px",
      margin: "-5px 0",
      borderTop: "5px solid rgba(255, 255, 255, 0)",
      borderBottom: "5px solid rgba(255, 255, 255, 0)",
      cursor: "row-resize",
      width: "100%",
      "&:hover": {
        borderTop: "5px solid rgba(0, 0, 0, 0.5)",
        borderBottom: "5px solid rgba(0, 0, 0, 0.5)"
      }
    },
    "&.vertical": {
      width: "11px",
      margin: "0 -5px",
      borderLeft: "5px solid rgba(255, 255, 255, 0)",
      borderRight: "5px solid rgba(255, 255, 255, 0)",
      cursor: "col-resize",
      "&:hover": {
        borderLeft: "5px solid rgba(0, 0, 0, 0.5)",
        borderRight: "5px solid rgba(0, 0, 0, 0.5)"
      }
    },
    "&.disabled": {
      cursor: "not-allowed",
      "&:hover": {
        borderColor: "transparent"
      }
    }
  };

  return {
    "@global": {
      ".Resizer": Resizer
    }
  };
};
