const http = require("http");
const express = require("express");
const RED = require("node-red");

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);

// Create the settings object
const settings = {
  httpAdminRoot: "/admin",
  httpNodeRoot: "/",
  userDir: "./.nodered/",
  flowFile: "flows.json",
  functionGlobalContext: {}, // Enables global context
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /admin
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /
app.use(settings.httpNodeRoot, RED.httpNode);

// Start the server
server.listen(process.env.PORT || 3000);

// Start Node-RED
RED.start();
