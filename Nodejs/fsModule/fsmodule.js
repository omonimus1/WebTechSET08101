var http = require('http');
var fs = require('fs');
http.createServer(function (eq , res)
{
	fs.readFile('fileTest.html' , function(err , data)
	{
		res.writeHead(200  , {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);
