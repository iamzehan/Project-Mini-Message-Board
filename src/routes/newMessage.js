// Initialize Route
const {Route} = require('express');
const newMessageRoute = Route();

newMessageRoute.get("/new", (req, res)=> {
    res.send({message: "New message route"});
});

module.exports = newMessageRoute;