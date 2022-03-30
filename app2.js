const express = require('express');
const filesys = require('fs');

const app = express();

const TOURS = JSON.parse(
    filesys.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours',(req, res)=>{
    res.status(200).json({
        status: 'success',
        data: {
            tours: TOURS

        }
})});

const port = 3000;
app.listen(port);
