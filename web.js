var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index_file = fs.readFile('./index.html', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  response.send(fs.readFileSync('./index.html', 'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
