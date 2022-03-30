const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    console.log('Request received successfully');
    res.status(200).send('This is your response:\n Hello from the server side :D');
})

const port  = 5000;
app.listen(port, ()=> {
    console.log('App running on port ' + port + '....');
});