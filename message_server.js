var express = require('express');
var messageSender = require('./sendSMS');
var app = express();
app.use(express.json());

app.get("/", function(req,res){
    res.send('Hello from meta meta.');
});

app.post("/send_message", function(req,res){
    console.log("received a send_message post request");
    messageSender(req.body.tel_num, req.body.message);
    console.log("sent a message");
    res.status(200);
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s",host,port);
})
