const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

//Routes
const tourRoute = require("./routes/tour.route");

app.use("/api/v1.0", tourRoute)

app.get("/", (req, res) => {
    res.send("Tour Management rest API!")
})

module.exports = app;