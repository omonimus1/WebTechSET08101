var express = require('express');
var app = express();

app.get('/',function (req , res)
{
    res.send('Hello Express');
})

var server = app.listen(5000 , "127.0.0.1" , function ()
{
    var host = server.address().address
    var port = server.address().port    
    console.log("Listening on http://%s:%s" , host , port)
})