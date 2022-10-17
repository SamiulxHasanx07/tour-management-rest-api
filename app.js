const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Router Is working")
})

module.exports = app;