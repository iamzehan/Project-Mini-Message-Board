// initialize express
const express = require('express');
const app = express();

//import routes
const indexRoute = require('./routes/indexRouter');
const newMessageRoute = require('./routes/newMessage')

// environment variable access
require('dotenv').config();
// path library
const path = require('node:path');
// import port
const PORT = process.env.PORT?? 3000;
// middleware for json
app.use(express.json());

// use the routes
app.use("/", indexRoute);
app.use("/new", newMessageRoute);

app.listen(PORT, (err)=> {
    if(err){
        console.error(err);
    }
    console.log(`http://localhost:${PORT}`)
});