"use strict";

const http = require("http");
const randomArray = require("./array");

http.createServer((request, response) => {
    console.log("Server is running on port 8080");
    let printedQuote = randomArray();
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(printedQuote);
    response.end();
}).listen(8080);