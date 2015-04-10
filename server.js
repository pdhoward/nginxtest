var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello from inside LIQUIDXIO container! This is version 4');
});

app.listen(8080);
