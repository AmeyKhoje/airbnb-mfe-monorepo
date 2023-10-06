const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");

module.exports = () => {
  return {
    ...webpackMfeConfig({
      port: 3011,
      skipHtmlPlugin: true,
      entryFileExtension: ".ts",
      mfeConfig: {
        name: "utility",
        appName: "utility",
        exposes: {
          "./helpers": "./src/helpers",
          "./hoc": "./src/hoc",
          "./hooks": "./src/hooks",
        },
      },
    }),
  };
};
