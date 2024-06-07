var http = require('http');

http.createServer(function (req, res) {

    // res.writeHead(200);

    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('History is out short here')
    }
    res.end();

}).listen(5000);

console.log('Server running at http://localhost:5000');