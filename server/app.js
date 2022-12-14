require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();

const connectToDataBase = require('./config/db')
const userRoute = require('./routes/userRoutes');


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

//connecting to the database
connectToDataBase()
//routing middleware
app.use('/', userRoute)



module.exports = app;