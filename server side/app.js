const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const app = express();

app.use(express.json());

mongoose
    .connect('mongodb+srv://adarsh_dy:Zn2OMHllnjiUVtoq@cluster0.znxnsco.mongodb.net/?retryWrites=true&w=majority')
    .then(() => app.listen(3000))
    .then(() => console.log('Database Connected!'))



/*
app.use('/', (req, res) =>{
    console.log ("Server Running")
    res.send("Hey from the server")
}).listen(3000)
*/


app.use('/user', userRouter);