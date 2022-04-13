
const express = require('express');

exports.getSlash(req, res){
    res.status(200).send('This is a GET response!');
}

exports.postSlash(req, res){
    res.status(200).send('This is a POST response');
}