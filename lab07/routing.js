const { createServer } = require("http");

const PORT = process.env.PORT || 10000;

const server  = createServer();

server.on("request" , (requeste , response) => 
{
    switch(requeste.url)
    {
        case "/":
                response.end("Our beautiful homepage");
        break;
        case "/about":
                response.end("An equally about page");
        break;

        default: 
            response.statusCode = 404;
            response.end("Page not found");
    }
});

server.listen(PORT, () => 
{
    console.log('starting server at port ${PORT}');
});