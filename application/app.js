
//imports
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const slashRouter = require('./routes/slashRouter');
const userRouter = require('./routes/userRouter');
const app = express();


//Middlewares
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
});


//./mounting routers
app.use('/api/v1', slashRouter)
app.use('/api/v1/users', userRouter)

module.exports = app;
