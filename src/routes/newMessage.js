// Initialize Route
const {Router} = require('express');
const newMessageRoute = Router();

newMessageRoute.get("/", (req, res)=> {
    res.send({message: "New message route"});
});

module.exports = newMessageRoute;