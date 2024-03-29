const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.on('connected', () =>{
    console.log("MongoDB database connection established successfully");
});

const customer = require('./routes/customer');
// const adminUserRouter = require('./routes/adminUser');
//const managerUserRouter = require('./routes/managerUser');
// app.use('/createAdminUser',adminUserRouter);
//app.use('/createManagerUser',managerUserRouter);


app.use('/customer',customer);


app.listen(port,() =>{
    console.log(`Server running on port: ${port}`);
});