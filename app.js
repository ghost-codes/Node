const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // console.log("end");
    // process.exit();

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Firs Page</title></head>');
    res.write('<body><h1>Hello from the Node.js Server</h1><body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);