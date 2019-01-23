import React from "react";
import { render } from "react-dom";
import App from "./App.dev";

render(
  <App />,
  document.getElementById("app"),
);

// react Ignored an update to unaccepted module
if ((module as any).hot) {
  (module as any).hot.accept("./App.dev", () => {
    const AppHot = require("./App.dev").default;

    render(
      <AppHot />,
      document.getElementById("app"),
    );
  });
}
