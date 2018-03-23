"use strict";

var express = require("express");
var exhbs = require("express-handlebars");
var bodyParser = require("body-parser");
var blog = require("./routes/blog");
var app = express();

app.use(bodyParser());
app.use(express.static("public"));
app.engine("hbs", exhbs({defaultLayout: "main"}));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/blog", blog.show);

var port = process.env.PORT || 5007;
app.listen(port, function() {
  console.log("Server Listening on PORT : ", port);
});
