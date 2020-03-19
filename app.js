require('dotenv').config();
//  if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//  }

const express = require('express');
const logger = require('morgan');
const cookieParser = require("cookie-parser");

const app = express();



//importing the routes
const USERS_ROUTES =  require("./routes/users");
// const INDEX_ROUTES = require("./routes/index");
const AUTH_ROUTES = require("./routes/auth");
const TODO_ROUTES = require("./routes/todos");

//adding cookie secret for cookieparser
const cookieSecret = process.env.COOKIE_SECRET


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(cookieSecret));


app.use(cookieParser());

//the endpoints for routes
app.use("/users", USERS_ROUTES);
app.use("/auth", AUTH_ROUTES);
app.use("/todos", TODO_ROUTES);

// Heroku post-build script
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
   // Set static folder
   app.use(express.static("client/build"));
   app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
 }


app.listen(process.env.PORT || 5000,()=> console.log('App listening on port 5000'));

module.exports = app;
