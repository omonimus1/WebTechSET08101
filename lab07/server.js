const { createServer } = require("http");

const PORT= process.env.PORT || 8080;

const server = createServer();

server.on("request" , (request , response) => {
    response.end("Hello , world!");
    response.write(", ");
    response.write("World");
    response.end();
});

server.listen(PORT, () => {
    console.log('Starting server at post 8080');
});
