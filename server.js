const express = require("express");
const RED = require("node-red");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const settings = {
  httpAdminRoot: "/admin",
  httpNodeRoot: "/",
  userDir: path.join(__dirname, "data"),
  functionGlobalContext: {},
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

module.exports = (req, res) => {
  RED.httpNode(req, res);
};
