var express = require('express');
var messageSender = require('./sendSMS');
var app = express();
app.use(express.json());

app.get("/", function(req,res){
    res.send('Hello from meta meta.');
});

app.post("/send_message", function(req,res){
    /*response = {
        tel_num: req.body.tel_num,
        message: req.body.message
    };*/
    messageSender(req.body.tel_num, req.body.message);
    //console.log("got a post request");
    console.log("sent a message");
    //res.send("sent: " + response);
});


var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s",host,port);
})
