// Initialize Route
const {Router} = require('express');
const newMessageRoute = Router();

newMessageRoute.get("/", (req, res)=> {
    res.render("newMessageView");
});

newMessageRoute.post("/", (req, res)=> {
    res.json(req.body);
})

module.exports = newMessageRoute;