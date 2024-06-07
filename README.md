# CIT281 Lab 4

## Overview

Lab goals and outcomes:

1. Create initial Fastify Node.js web server.
2. Initialize as a Node.js project folder using Node Package Manager (npm).
3. Add Fastify to project using npm, and test using Visual Studio Code (VSCode).
4. Add git repo, exclude node_modules folder from git, make commits.
5. Fix MIME error, test, and commit.
6. Add a second route with query parameters, test, and commit.

## Deliverables

- `lab-04.js`
- `package.json`
- `.gitignore`

These files should be placed in your `cit281/p3/lab-04` folder and zipped into `lab-04.zip`.

## Instructions

### Part 1: Create initial Fastify Node.js web server

1. Create a folder called `lab-04` in your `cit281/p3` folder.
2. Create a file `lab-04.js` in your `cit281/p3/lab-04` folder.
3. Copy the following code into the file:

   ```javascript
   // Require the Fastify framework and instantiate it
   const fastify = require("fastify")();
   // Handle GET verb for / route using Fastify
   // Note use of "chain" dot notation syntax
   fastify.get("/", (request, reply) => {
     reply
       .code(200)
       .header("Content-Type", "text/html; charset=utf-8")
       .send("<h1>Hello from Lab 4!</h1>");
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
