require('dotenv').config();
 if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
 }

const express = require('express');
// const path = require('path');
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
// app.use("/", INDEX_ROUTES);
app.use("/users", USERS_ROUTES);
app.use("/auth", AUTH_ROUTES);
app.use("/todos", TODO_ROUTES);



app.listen(process.env.PORT || 5000,()=> console.log('App listening on port 5000'));

module.exports = app;
