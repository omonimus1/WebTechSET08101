
const { createServer } = require("http");

const PORT = process.env.PORT || 10000;

const server = createServer();

server.on("request" , (request , response) =>
{
    // We will see a "Got a get" , because our browser uses GET requests by default. 
    if(request.method === "GET")    
        return  response.end("GOT a GET");
    else if (request.mmethod === "POST")
        return response.end("GOT A POST");
    else
    {
        resource.statusCode(400);
        return response.end("Method not supported")
    }
});


