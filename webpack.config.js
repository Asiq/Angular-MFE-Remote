const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "microfrontend_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./AppComponent": "./src/app/app.component.ts",
    "./LoginComponent": "./src/app/login/login.component.ts",
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

/*
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");

const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(path.join(__dirname, "./tsconfig.json"), [
//   "shared-lib",
// ]);

module.exports = {
  output: {
    uniqueName: "microfrontend_remote",
    library: {
      type: "module", // Ensures remoteEntry.js is treated as an ES module
    },
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  experiments: {
    outputModule: true, // Enables ES module output
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "microfrontend_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/app.component.ts",
        "./Login": "./src/app/login/login.component.ts",
      },
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
      },
    }),
    sharedMappings.getPlugin(),
  ],
};*/
