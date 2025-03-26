const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "microfrontend_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./UserAnalyticsComponent":
      "./src/app/user-analytics/user-analytics.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
