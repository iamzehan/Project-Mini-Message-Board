// Initialize Route
const { Route } = require("express");
const indexRoute = Route();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRoute.get("/", (req, res) => {
  res.json(messages);
});

module.exports = indexRoute;