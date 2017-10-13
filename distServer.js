/* eslint-disable */

var path = require("path");
var express = require("express");

var app = express();

var serverPort = process.env.PORT || #WA_OPENSOURCE_PORT#;
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "0.0.0.0", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening @ port: " + serverPort);
});