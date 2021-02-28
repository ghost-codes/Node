const http = require('http');

//importing routes file
const routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(3000);