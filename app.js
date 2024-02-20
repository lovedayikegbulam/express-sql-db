const express = require("express");
const app = express();

const CONFIG = require("./config/config");


app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(CONFIG.PORT, () => {
  console.log(`Example app listening on port ${CONFIG.PORT}`)
})