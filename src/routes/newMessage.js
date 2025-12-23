// Initialize Route
const {Route} = require('express');
const newMessageRoute = Route();

newMessageRoute.get("/", (req, res)=> {
    res.send({message: "New message route"});
});

module.exports = newMessageRoute;