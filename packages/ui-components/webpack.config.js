const path = require("path");
const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");
const { getMfeFileName } = require("../../webpack-config/helper");

module.exports = () => {
  return {
    ...webpackMfeConfig({
      port: 3010,
      skipHtmlPlugin: true,
      mfeConfig: {
        name: "uiComponents",
        appName: "uiComponents",
        exposes: {
          "./components": "./src/components",
        },
        remotes: {
          utility: `utility@http://localhost:3011/${getMfeFileName("utility")}`,
        },
      },
      aliases: {
        src: path.resolve(__dirname, "./src"),
        hoc: path.resolve(__dirname, "./src/hoc"),
        components: path.resolve(__dirname, "./src/components"),
        assets: path.resolve(__dirname, "./src/assets"),
      },
    }),
  };
};
