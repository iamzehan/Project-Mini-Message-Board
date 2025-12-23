const {messages}= require('../models/data');

// request controllers
function post(req, res) {
    const { user, text } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect("/");
}

// render controllers
function form(req, res) {
    res.render("newMessageView");
}

function inbox(req, res){
  res.render("messagesViews", {messages:messages});
}

module.exports = {
    form,
    inbox,
    post
}