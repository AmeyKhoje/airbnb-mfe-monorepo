const { getMfeFileName } = require("../../webpack-config/helper");
const webpackMfeConfig = require("../../webpack-config/webpack.mfe.config");

module.exports = () => {
  return {
    ...webpackMfeConfig({
      port: 3000,
      open: true,
      mfeConfig: {
        name: "container",
        appName: "container",
        remotes: {
          landing: `landing@http://localhost:3001/${getMfeFileName("landing")}`,
        },
      },
    }),
  };
};
