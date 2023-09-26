const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");

module.exports = () => {
  return {
    ...webpackMfeConfig({
      port: 3001,
      mfeConfig: {
        name: "landing",
        appName: "landing",
        exposes: {
          "./App": "./src/App.tsx",
        },
      },
    }),
  };
};
