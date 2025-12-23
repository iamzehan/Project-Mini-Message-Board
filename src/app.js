// initialize express
const express = require("express");
const app = express();

// environment variables
require("dotenv").config();

// path library
const path = require("node:path");

// routes
const indexRoute = require("./routes/indexRouter");
const newMessageRoute = require("./routes/newMessage");

//  LIVE RELOAD SETUP
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

// Create livereload server watching views & public
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(__dirname, "views/**/*.ejs"),
  path.join(__dirname, "public/css"),
  path.join(__dirname, "public/js")
]);

app.use(connectLiveReload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => liveReloadServer.refresh("/"), 0);
});


// Middleware & Static Files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRoute);
app.use("/new", newMessageRoute);

// Start Server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
