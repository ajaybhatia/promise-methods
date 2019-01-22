Package.describe({
  name: "promise-methods",
  version: "0.0.1",
  summary: "Utility for Promise-based method calls in Meteor",
  git: "https://github.com/ajaybhatia/promise-methods.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.0.2");
  api.use("ecmascript");
  api.addFiles("client/promise-methods.js", "client");
});
