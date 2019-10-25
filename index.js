const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");


mongoose.connect("mongodb://mongo:27017/curso", { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("conected");
});

app.use(routes);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
