const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");

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
      },
    }),
  };
};
