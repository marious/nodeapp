/*var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-typ':'text/plain'});
	res.end('Hello');
}).listen(1337, '127.0.0.1');

console.log('WebServer has started');
*/

var http = require('http');
var fs = require('fs');
var os = require('os');

http.createServer(function(req, res) {
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-typ':'text/html'});
		res.end(data);
	});
	
}).listen(1337, '127.0.0.1');

console.log('WebServer has started');