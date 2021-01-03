const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const homeRoute = require('./router/login');

app.use("/",homeRoute);


app.listen(PORT,()=>{console.log('port running')})