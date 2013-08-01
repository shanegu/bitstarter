var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var htmlfromfile = fs.readFileSync('./index.html', 'utf8');
  response.send(htmlfromfile);
//  response.send("hello");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
