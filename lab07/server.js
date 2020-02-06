const { createServer } = require("http");
const PORT= process.env.PORT ||5000;
const server = createServer();

server.on("request" , (request , response) =>
{
    response,end("Hello , world!");
});

server.listen(PORT,  () => 
{
    console.log('Starting new server at port {$PORT}');
});