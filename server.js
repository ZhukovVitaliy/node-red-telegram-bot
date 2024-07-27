const express = require("express");
const RED = require("node-red");

const app = express();
const server = require("http").createServer(app);

const settings = {
  httpAdminRoot: "/admin",
  httpNodeRoot: "/",
  userDir: "/data/",
  functionGlobalContext: {},
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
