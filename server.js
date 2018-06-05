"use strict";

const http = require("http");
const randomArray = require("./array");

http.createServer((req, res) => {
    let quote = randomArray();
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(quote);
    res.end();
}).listen(8080);