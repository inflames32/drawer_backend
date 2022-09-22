var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/test", (req, res) => {
  res.send("test");
});
app.listen(5000, () => {
  console.log("server started");
});
