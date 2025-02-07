// Require the Fastify framework and instantiate it
const fastify = require("fastify")();

// Handle GET verb for the root "/" route using Fastify
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

// Add a second route to handle query parameters
fastify.get("/name", (request, reply) => {
  const { first, last } = request.query;
  const name = first && last ? `Hello, ${first} ${last}` : "Hello, Guest";
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h1>${name}</h1>`);
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});