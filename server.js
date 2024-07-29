const http = require("http");
const express = require("express");
const RED = require("node-red");

// Создаем сервер
const app = express();
const server = http.createServer(app);

// Создаем настройки Node-RED
const settings = {
  httpAdminRoot: "/admin",
  httpNodeRoot: "/",
  userDir: "./.nodered/",
  flowFile: "flows.json",
  functionGlobalContext: {}, // Enables global context
};

// Инициализируем Node-RED
RED.init(server, settings);

// Указываем Node-RED использовать Express сервер
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Запускаем сервер
server.listen(process.env.PORT || 3000);

// Запускаем Node-RED
RED.start();
