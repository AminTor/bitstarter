var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = '/home/ubuntu/bitstarter/index.html';


//var buf = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html'));
//fs.readFileSync('index.html').toString("UTF-8");



app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html').toString("UTF-8"));
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});
