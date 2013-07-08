var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = '/home/ubuntu/bitstarter/index.html';


var buf = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html'));



app.get('/', function(request, response) {
  response.send(buf.toString("utf-8",0,buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
