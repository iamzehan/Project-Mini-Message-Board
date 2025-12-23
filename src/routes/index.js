// Initialize Router
const { Router } = require("express");
const router = Router();
// get controllers
const controller = require('../controllers/messagesController');

// inbox  
router.get("/", controller.inbox);

// send message form
router.get("/new", controller.form);

// send message via post method
router.post("/new", controller.post)

module.exports = router;