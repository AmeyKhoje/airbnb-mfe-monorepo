const { getMfeFileName } = require("../../webpack-config/helper");
const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");

module.exports = () => {
  return {
    ...webpackMfeConfig({
      port: 3001,
      mfeConfig: {
        name: "landing",
        appName: "landing",
        remotes: {
          "ui-components": `uiComponents@http://localhost:3010/${getMfeFileName(
            "uiComponents"
          )}`,
        },
        exposes: {
          "./App": "./src/App.tsx",
        },
      },
    }),
  };
};
