var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = '/home/ubuntu/bitstarter/index.html';


//var buf = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html'));
//    response.send(fs.readFileSync('/home/ubuntu/bitstarter/index.html').toString("UTF-8"));



app.get('/', function(request, response) {
    response.send('Hellow world test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
