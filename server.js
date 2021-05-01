const express = require('express');
const app = express();
const connectDB = require("./config/connectDB");

const userRoute = require("./routes/userRoutes");

app.use(express.json());

connectDB();

app.use("/users", userRoute);

const port = process.env.PORT;
app.listen(port, err => {
    err ? console.log("error") : console.log('server is running on server${port}')}
    );