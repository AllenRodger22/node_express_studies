const express = require('express');
const app = express();
const port = 3000;


//forma de  ler json
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rota inicial / endpoint
app.get('/', (req, res) => {
    //passando mensagem por json
    res.json({message: 'This is your response from / endpoint!'});
});

//segundo método pro mesmo endpoint
app.post('/', (req, res) => {
    res.send(req.body.message);
});

//escutar porta: port
app.listen(port);