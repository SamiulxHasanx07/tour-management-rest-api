const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");
const cors = require("cors");

app.use(cors());

// database connection
mongoose.connect(process.env.LOCAL_DATABASE).then(() => {
    console.log("Database Connected Successfully");
})

// server port

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});