var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(err, contents){
  console.log(contents);
});
  response.write('contents');
  response.end();
}).listen(8080);
