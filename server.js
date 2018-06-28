const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const flash = require('connect-flash');
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(function(req, res, next) {
  res.locals.signinMessage = req.flash('signinMessage');
  res.locals.signupMessage = req.flash('signupMessage');
  res.locals.error = req.flash('error');
  next();
});

// Add routes, both API and view
app.use(routes);
// Define API routes here
// app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/OnTheWall");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});