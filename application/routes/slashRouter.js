
const express = require('express');
const slashRouter = express.Router();

//router
slashRouter
    .route('/')
    .get(getSlash)
    .post(postSlash);


//functions
function getSlash(req, res){
    res.status(200).send('This is a GET response!');
}

function postSlash(req, res){
    res.status(200).send('This is a POST response');
}

module.exports = slashRouter;