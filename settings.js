module.exports = {
  uiPort: process.env.PORT || 1880,
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./",
  functionGlobalContext: {},
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },
};
