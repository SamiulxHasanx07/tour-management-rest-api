const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = require('./app');

//database connection 
mongoose.connect(process.env.LOCAL_DATABASE).then(() => {
    console.log('Database connection is successfully done')
})

app.use('/', (req, res)=>{
    res.send("Server running")
})

//server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`App is running on port  ${port}`);
})