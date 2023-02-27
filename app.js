const express = require("express");
const methodOverride = require("method-override");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("listening on port" + port));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./view/home.html"))
);
