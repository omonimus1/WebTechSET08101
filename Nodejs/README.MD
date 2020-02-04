# Nodejs
##### Notes got from w3schools.com/nodejs

This notes had been created reading the Book: Beginning [Node.js](../Readings/BeginningNode.js.pdf), available in our Reading section.

* Node JS:
    * free and open source multi-platform server envirnment.
    * It uses javaScript on the server.
    * Asynchronous programming

* What to do with Nodejs:
    * Generete dynamic page content
    * Create, open, wrtie and delete files on the server
    * Execute CRUD operation in our database.

* ```.load filename.Js``` : is the command used to run our NodeJs module.

* Node.js files:    
    * Must be initialized in the server before be used.
    * Have .js extension .


## Node.js modules

* Node.js module: is always a Javascript library.
    * Include a built-in module: ```require('moduleName')```.
    * Include your own module:
    ```require('./moduleName')```
        *```./``` is used to locate the module, that means that the modue is located in the same folder as the Node.js file.  

myModule.js
```
// export make properties and methods //available outside the module file.
exports.myDateTime = function () {
  return Date();
};https://resume.io/r/HK2lrtXMB
```

Node.js
```
var http = require('http');
var dt = require('./myModule.js')
http.createServer(function (req , res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current date: " + dt.myDateTime());
    res.end();
}).listen(8080);
```

## Node.js as a File Server
* Node.js file system module allows us to work with the file system on our machine.
```
// fs: built-in Node.js module to manage the file system.
var fs = require('fs')
```
After importing the fs module, we can: create , read , update, rename or delete a file.
```
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
```

## fs.appendFile()


## fs.open()

## fs.writeFile()

## Buit-in HTTP Module
* HTTP module   
    *  ```createServer()```:used to create an HTTP server that listens to server ports and gives a repsonse back to the client
    * ```req()```: req argument represents the request from the client, as an object. This object has between its properties the URL, that cames after the domain name. [reqUrl.js](reqUrl.js)



Nde.js is focused on being the best way to implement highly performant web application.
This is achieved because in Node.js, a single thread handles multiple HTTP requests. The idea is that a single threaded server can perform better than a thread pool server.

* javaScript is a first class language
    * First class programming language: functions and variables can be used / accessed in the same way.

*  In js we have ```anonymous function```: functions without any identifier - name.
```$xslt
function foo()
{
    console.log('250 milliseconds have passed since we run this demo');
}
setTimeout(foo , 250);
```
## Callback
* Node.js callback: a callback is a synchronous program. A callback is a function called at the completitin of a given task;
This prevents any blocl and allows other code tp be run in the meantime.
```$xslt
function longRunningOperation (callback)
{
    // Simulate a 3 seconds operation
    setTimeOut(callback , 3000);
}
```
