// Author : Davide Pollicino 
// Date: 31/01/2019

/*
    Aim: Learn the get the URL from the an HTTP request. 
    In this case we will simulate our server in localhost in the port 8080

    1 : add the js file to the Node.js server
        1.1 In the terminal -> node reqUrl.js
    2: Open the browser il localhosy
        2.1- IN the browser -> localhost:8080
            2.2 Output: "/"
        2.1- In the browser -> localhost:8080/ciaone.html
            2.2 Output: "ciaone.html"
*/
var http = require('http');
http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);