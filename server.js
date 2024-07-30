const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: ".nodered/",
  functionGlobalContext: {}, // enables global context
};

// Serve the editor UI from /red
app.use("/red", express.static("public"));

// Create the Node-RED runtime
RED.init(server, settings);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

// Start the Node-RED runtime
server.listen(process.env.PORT || 3000, function () {
  console.log(
    "Node-RED running at http://localhost:" +
      (process.env.PORT || 3000) +
      "/red"
  );
});

// Start the Node-RED server
RED.start();
