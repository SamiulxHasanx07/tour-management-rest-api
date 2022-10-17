const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

//Routes
const tourRoute = require("./routes/tour.route");
app.use("/api/v1.0/tours", tourRoute)

app.get("/", (req, res) => {
    res.send("Tour Management rest API!")
})

module.exports = app;