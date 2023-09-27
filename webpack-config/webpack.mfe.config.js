const configBase = require("./webpack.base.config");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const packageJson = require("./package.json");
const { getMfeFileName } = require("./helper");

module.exports = ({
  mfeConfig,
  port,
  open = false,
  skipHtml = false,
  entryFileExtension = ".tsx",
}) => {
  const baseConfig = configBase(
    port,
    "development",
    open,
    skipHtml,
    entryFileExtension
  );
  return {
    ...baseConfig,
    plugins: [
      ...baseConfig.plugins,
      new ModuleFederationPlugin({
        name: mfeConfig.name,
        filename: getMfeFileName(mfeConfig.appName) || "remoteEntry.js",
        remotes: mfeConfig.remotes || {},
        exposes: mfeConfig.exposes || {},
        shared: {
          ...mfeConfig.shared,
        },
      }),
    ],
  };
};
